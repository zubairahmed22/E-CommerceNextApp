import React,{useState} from 'react'
import styles from '../styles/Register.module.css'
import { useRouter } from "next/router";
import { useContext} from 'react'
import { UserContext } from '../Context'
import {toast}from "react-toastify"
import Cookies from 'js-cookie'
import {parseCookies} from "nookies"
import API from '../Component/Backend';

 const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    const {state,setState} = useContext(UserContext)
    const router = useRouter();
    
   const loginSubmit = async(e) =>{
    try {
      const  data = {email,password}
      const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : ""
      const response = await fetch(`${API}/api/login`,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
    
       },
       body: JSON.stringify(data)
      })
      const parsedData =  await response.json();
      console.log(parsedData.user)
     
      Cookies.set("token",parsedData.token)
      Cookies.set('user',JSON.stringify(parsedData.user))
      

   if(parsedData.error){
    toast.error(parsedData.error)
  
  
   
   
   }else{

    setState({
      user:  parsedData.user,
      token: parsedData.token
    
    }) }
    window.localStorage.setItem("token",JSON.stringify(parsedData.token))
    window.localStorage.setItem("user",JSON.stringify(parsedData.user.rows))
    router.push('/')
     

    
  }

     catch (error) {
     
      console.log(error)
    }
    
   }

  return (
    <>
    
    <div className={styles.container} >
      <div className={styles.formController}><h1>Login User</h1>
      
      

       
      <div>
      <p>
       email
      </p>
      <input className={styles.inputField} 
      value={email}
        onChange={(e) => setEmail(e.target.value)}
       type="text"  resource='email' placeholder='email'/>
      </div>
 
      
      
 
      <div>
      <p>
       password
      </p>
      <input name='name'className={styles.inputField} 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
       type="text" placeholder='password'/>
      
      </div>

      <div>
      <button  className={styles.Btn} onClick={loginSubmit}>Login</button>

      
      </div>
      
      </div>
     
      </div>
    </>
  
   
  )
}

  export default Login

  export async function getServerSideProps(ctx){

    const cookie  = parseCookies(ctx)
    const token = cookie.token
    // const user = cookie.user ? JSON.parse(cookie.user): ""
   
     if(token && token){
       const {res} = ctx
       res.writeHead(302,{location:"/"})
       res.end()
     }
      return {
        props: {}, // will be passed to the page component as props
      }
  }