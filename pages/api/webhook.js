import { conn } from './db';
import {buffer}from "micro"

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async function handler(req,res)
const signingSecret = 'whsec_9e330dc6cc024c73265012e5d4c1e41dadd38d00bfd6bfc6d45f74fe6d2af46a'
const payload = await buffer(req);
const signature = req.headers['stripe-signature'];


 const event = stripe.webhooks.constructEvent(payload,signature, signingSecret)
 if(event?.type === 'checkout.session.completed'){
    console.log(event)
   const  metadata = event.data?.object?.metadata;
   const paymentStatus = event.data?.object?.payment_status
   const orderID =  metadata.orderId
   console.log(orderID)
   if( metadata?.orderId && paymentStatus === 'paid'){
      const order = conn.query('SELECT FROM orders where order_id = $1',[orderID])
      console.log( "check order" ,order)
      if(order){
      await conn.query('UPDATE orders SET paid = $1 where  order_id = $2',[1,orderID ])
    
    

       } }
   res.json('Ok')
 



   }
export const config = {
    api:{
        bodyParser: false
    }
}