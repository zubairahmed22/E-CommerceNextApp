import { conn } from "./db";

const hander = async (req,res) =>{
    if(req.method === "GET"){
        try {
            const token = req.query.token
            console.log("verification token check",token)
            
          
            
            
            
            const user = await conn.query('SELECT * from users where  token = $1',[token]);
            if(user){
              conn.query('UPDATE users SET token= $1, verify = $2 where token = $3',[null,1,token]);
             return res.redirect('http://localhost:3000/login');
            }else{
             return res.redirect('http://localhost:3000/register');
             console.log("Email is not verified")
            }
           
            
        
              
          }
          
           catch (error) {
            res.status(403).json(error)
          }
            
    }
}
export default hander;