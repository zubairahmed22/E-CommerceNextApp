import { conn } from "../db"


// get a unique record, edit , delete 

const manageproduct = async(req,res) =>{
    const {method, 
        query: {id}
        } = req
     console.log(typeof(id))
    switch (method) {
        case "GET":
        try {
         const oneProduct = await conn.query('SELECT * FROM products where product_id = $1',[id]); 
         if(!oneProduct){
            res.status(400).json({success: false, error}) 
         }
         res.status(200).json(oneProduct.rows)
        } catch (error) {
          res.status(400).json({success: false, error})
        }
       break;

            case "PUT":
                try {
                 const {name, stock,pro_price, discription,image} = req.body
                 const updateOne = await conn.query('UPDATE products SET product_name = $1,product_dis= $2, price= $3, stok= $4, product_img = $5 WHERE product_id = $6'
                 ,[ name,discription,pro_price,stock,image,id]);
                 if(!updateOne){
                    res.status(400).json({success: false, error}) 
                 }
                 res.status(200).json({success: true,updateOne})
                } catch (error) {
                  res.status(400).json({success: false, error})
                }
                break;
                    case "DELETE":
                     try {
                         console.log(id)
                         const deleteOne = await conn.query('DELETE FROM products WHERE product_id = $1',[id]);
                         if(!deleteOne){
                            res.status(400).json({success: false, error}) 
                         }
                         res.status(200).json({success: true,deleteOne})
                        } catch (error) {
                          res.status(400).json({success: false, error})
                        }
                         break;
    
        default:
            res.status(400).json({success: false, error})
            break;
    }
}

export default manageproduct