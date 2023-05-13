import { conn } from "./db";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res){
if(req.method !=="POST"){
    res.json("should a post but its not")
    return
}
   
        // Create Checkout Sessions from body params.
        const {email, name,city, street,phone} = req.body
        const productIds = req.body.products.split(',')
 
        const uniqIds = [...new Set(productIds)]
        const oneProduct = await conn.query('select * from products where product_id = ANY($1 ::int[])',[uniqIds]);
              
 
        let line_item = []
        for(let productId of uniqIds){
            const quantity = productIds.filter(id => id  === productId).length;
            const product = await oneProduct.rows.find(p => p.product_id.toString() === productId)
            line_item.push({
               quantity,
               price_data:{
                currency: "USD",
                product_data: {name: product.product_name},
                product_image:{image: product.product_image},
                unit_amount: product.price * 100

               } 
            })
        }
       
        
      const order =  await conn.query('INSERT INTO orders(user_name,user_email,user_address,user_city,phone_no,products) VALUES($1,$2,$3,$4,$5,$6) RETURNING * ',[name,email,street,city,phone,line_item])
      
        const session = await stripe.checkout.sessions.create({
          line_items: line_item,
          mode: 'payment',
           customer_email: email,
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
          metadata: {orderId: order.rows[0].order_id.toString()}
          
        });
        res.redirect(303, session.url);
      } 


