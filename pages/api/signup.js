import {conn} from "./db"
import jwtGen from "../../jwtgenrate/jwttoken"
import validator from "../../middleware/validation"
import  API  from "../../Component/Backend";
const bcrypt = require('bcrypt')


function validEmail(email) {
 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
const jwt = require("jsonwebtoken")
const nodemailer = require('nodemailer')
require('dotenv').config()
const crypto = require('crypto')

const  handler =  async(req, res) => {
    if(req.method == "POST"){
       try {
        const {name, email, password} =   req.body
       console.log(req.body)
      
       // 2. check if the user exist (if user exist throw error)
        const user = await conn.query("SELECT * FROM   users WHERE user_email = $1",
        [email]);
        if (![email, name, password].every(Boolean)) {
         res.status(400).json({error:"Missing Credentials"});
   }   
    else if (!validEmail(email)) {
         res.status(400).json({error:"Invalid Email"});
   }
        else if(user.rows.length !== 0){
          res.status(400).json({error:"user already exist"})
        }
        
       // 3. Bcrypt the user password
 
       const saltRound = 10
       const salt  = await bcrypt.genSalt(saltRound);
 
       const bcryptPassword = await bcrypt.hash(password,salt)
 
       
       //Generating Email verification token
       const verificationToken =  crypto.randomBytes(30).toString("hex")
       
 
       // 4. enter the new user inside the database 
     
       const newUser = await conn.query("INSERT INTO users (user_name,user_email,user_password,token)VALUES($1,$2,$3,$4) RETURNING *",
       [name,email,bcryptPassword,verificationToken]
       )
    
       // 5. genrating jwt token
      
       const token =  jwtGen(newUser.rows[0].user_id)
       res.status(200).json({newUser,token})

       //sending eamil verification
       let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
          user:process.env.EMAIL,
          pass:process.env.PASS
        }
      })
      const url = `${API}/api/email-verify?token=${verificationToken}`
      let mailOptions = {
        from:"zubair@gmail.com",
        to:email,
        subject:"testing the email services",
        html: `You requested for email verification, kindly use this <a href="${url}">${url}</a>to verify your email address`
      }
      transporter.sendMail(mailOptions,(err,data) =>{
           if(err){
            console.log("error accurs",err)
           }else{
            console.log('Email sent!!')
           
            req.fresh("success","thank you for registering, email is sent to your account please verify it!!")
           
            
           }
      })
    
       } catch (error) {
       return res.status(400).json({error: " error is accured"})
       } 
       
 
 
 
  
      }    
    
    

  }

  export default  handler