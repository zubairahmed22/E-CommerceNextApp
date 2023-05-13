const jwt = require('jsonwebtoken')
require('dotenv').config()
import { conn } from '../pages/api/db'
const authorize = (handler) =>{
return async(req,res) =>{
    try {
        const email = req.body.email
        
       const user = await conn.query('SELECT * from users where user_email = $1',[email]);
       
       if(!user.rows[0]. user_email == email){
        res.status(401).json({error:"user does not exist"})
        console.log('no users')
       }
       
      else if(user.rows[0].verify != 1){
        console.log(user.rows[0].verify)
        res.status(401).json({error:"Email is not verified please verify your account"})  
       }
    
    
    } catch (error) {
        console.log(error)
       
    }
    return handler(req,res)
}
}

export default authorize