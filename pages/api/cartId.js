
import { conn } from "./db";

export default async function handler (req, res) {
    const {ids} = await req.query

    
    // const   num  = Array.from(String(ids),Number).filter(num => Number(num))
    const arr =  ids.split(',').map(Number) 
   
    

    if(req.method == "GET"){
        try {
            
                       
                const oneProduct = await conn.query('select * from products where product_id = ANY($1 ::int[])',[arr]);
              
                res.status(200).json(oneProduct.rows)
               
            }
               
           
         catch (error) {
            console.log(error)
            res.status(400).json("error accourd",error)
        }
    }
    
    
  }

