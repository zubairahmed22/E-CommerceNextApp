import {conn} from "./db"

const bcrypt = require('bcrypt')
import jwtGen from "../../jwtgenrate/jwttoken"


import authorize from "../../middleware/auth"

import Cors from 'cors';

// Initialize the CORS middleware
const cors = Cors({
  methods: ['GET', 'POST','HEAD'], // Specify the allowed HTTP methods
  origin: 'https://e-commerce-next-ap-p.vercel.app' // Replace with the actual origin of your Next.js app
});

// Helper method to enable CORS for the API route
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
function validEmail(email) {
  return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
 async function  handler(req, res,) {
  await runMiddleware(req, res, cors);
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