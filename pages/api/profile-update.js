import {conn} from "./db"
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const handler = async (req,res) =>{
    if(req.method === "PUT"){
        try {
    
            const {name, email} = await req.body
            
            const id = await req.body.id
           
            
           
           
            const data = await conn.query('UPDATE users  SET user_name = $1,user_email = $2 where user_id = $3',[
              name,email,id
            ]);
            res.status(200).json({message:"user profile has been updated"})
        
          } catch (error) {
            console.log(error)
            res.status(401).json({error:"error occurred updating data"})
          }
    }
    
}
export default handler