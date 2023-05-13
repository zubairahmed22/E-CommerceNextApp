
import { conn } from "./db"

const category = async (req,res) =>{
    const {method} = req
    switch (method) {
    case "GET":
 try {
             
                
     const  allCategory = await conn.query("select * from categories");  
     res.status(200).json(allCategory.rows)
     } catch (error) {
     res.status(400).json({success: false, error})
  }
  break

    case "POST":
    const {category} = req.body
    try {
    let cate =  await conn.query("INSERT INTO categories(cate_name) VALUES($1) RETURNING * ",[category]);
    if(!cate){
        res.status(400).json({success: false})
    }
    res.status(200).json({success:"category is created",cate})
    
}   catch (error) {
    console.log(error)
}
    break;
    
    
    
        default:
            break;
    }


}
export default category