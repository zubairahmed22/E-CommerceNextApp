import { conn } from "../db"

// get a unique record, edit , delete 

export default categoryid = async(req,res) =>{
    const {method, 
        query: {id}
        } = req
     
    switch (method) {
        case "GET":
        try {
         const oneCategory = await conn.query('SELECT * FROM categories where cate_id = $1',[id]); 
         if(!oneCategory){
            res.status(400).json({success: false, error}) 
         }
         res.status(200).json(oneCategory.rows)
        } catch (error) {
          res.status(400).json({success: false, error})
        }
       break;

            case "PUT":
                try {
                 const {category} = req.body
                 const updateOne = await conn.query("UPDATE categories SET cate_name = $1 where cate_id = $2",[category,id]);
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
                         const deleteOne = await conn.query('DELETE FROM categories WHERE cate_id = $1',[id]);
                         if(!deleteOne){
                            res.status(400).json({success: false, error}) 
                         }
                         res.status(200).json({success: true,deleteOne})
                        } catch (error) {
                          res.status(400).json({success: false, error})
                        }
                         break;
                         
                       // product API start here...
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
                                      const { name, discription, price,stok, image} = req.body
                                   const updateOne = await conn.query('UPDATE products SET product_name = $1,product_dis= $2, price=$3, stok=$4, product_img = $5 WHERE product_id = $6'
                                   ,[ name,discription,price,stok,image,id]);
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
                                           const deleteOne = await conn.query('DELETE FROM products WHERE cate_id = $1',[id]);
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