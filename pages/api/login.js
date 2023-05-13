import {conn} from "./db"

const bcrypt = require('bcrypt')
import jwtGen from "../../jwtgenrate/jwttoken"


import authorize from "../../middleware/auth"
function validEmail(email) {
  return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
 async function  handler(req, res) {
        if(req.method == "POST"){
            try {
                // 1 destructure the req.body 
                const {email,password} = req.body
            
                if (![email, password].every(Boolean)) {
                  res.status(400).json({error:"Missing Credentials"});
                 } else if (!validEmail(email)) {
                   res.json({error: "Invalid Email"});
                 }
                // 2 check if user doesn,t exist (if not then throw error)
                const user = await conn.query("SELECT * FROM users WHERE user_email = $1",
                [email]);
               
                if(!user){
               res.json({error:"email does not exist "})
                }
                
                if(user.rows.length === 0){
                   res.json({error:"password or email is incorrect"})
                }
                
                // 3 check if incomming password is the same the database password
                const validPassword = await bcrypt.compare(password,user.rows[0].user_password)
               
                
                 if(!validPassword){
                  return res.json({error:"password or email is incrroct"})
                 }
                // 4 given them jwt token
                const token  = jwtGen(user.rows[0].user_id)
                res.json({token, user: user.rows})
              
            
              } catch (error) {
                console.log(error)
              }
            
        }
       
    
  }

  export default authorize(handler) 