const validator = (handler) =>{
    return async(req,res) =>{
      console.log(req.path)
      try {
const { email, name, password } =  req.body;
function validEmail(email) {
  return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

if (req.path == "/register") {
 
  if (![email, name, password].every(Boolean)) {
     res.json({error:"Missing Credentials"});
  } else if (!validEmail(email)) {
  res.status(400).json({error:"Invalid Email"});
  }
} else if (req.path == "/login") {
  if (![email, password].every(Boolean)) {
   res.json({error:"Missing Credentials"});
  } else if (!validEmail(email)) {
    res.json({error: "Invalid Email"});
  }
}
      } catch (error) {
        return console.log(error)
      }


        return handler(req,res)
    }
    }
    
    export default validator










