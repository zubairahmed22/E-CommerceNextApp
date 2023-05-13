import { conn } from "./db";

const product = async(req, res) =>{

    
    const {method} = req
    switch (method) {
        case "POST":
            try {
                const { name, discription, price, cateId,stok, image} = req.body
                console.log("CATEGORY ID",cateId)
                const product = await conn.query("INSERT INTO products (product_name, product_dis, price, cate_id,stok,product_img)VALUES($1,$2,$3,$4,$5,$6 ) RETURNING *",
                [name,discription,price,cateId,stok,image])
                if(!product){
                    res.status(400).json({error:"error accured while creating product"})
                }
                res.status(200).json({success:"product created!",product})
            } catch (error) {
                console.log(error)
            }
            break;
            case "GET":
            try {
                 
            
            
            
                const  allProduct = await conn.query('select * from products');  
                res.status(200).json(allProduct.rows)
        
   
             
     } 
      catch (error) {
                res.status(400).json({success: false, error}) 
            }
            break
        default:
            break;
    }

}

export default product