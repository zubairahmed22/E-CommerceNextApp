import React,{useState} from 'react'
import styles from '../styles/Register.module.css'
import { useRouter } from "next/router";
import {toast}from "react-toastify"




import { useContext} from 'react'
import { UserContext } from '../Context'
import { API } from '../Component/Backend';
const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState()
  const router = useRouter();
  
  const {state,setState,} = useContext(UserContext);

  

   const submitData = async() =>{
   
    try {
      
      const data  =  {name,email,password}
      
      const response = await fetch(`${API}/api/signup`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
  
     },
     body: JSON.stringify(data)
    
    })
const parsedData =  await response.json();
console.log(parsedData)
  

   if(parsedData.error){
    toast.error(parsedData.error)
   
    
   }else{
setState({
  user: parsedData.newUser.rows
})
console.log(parsedData.success)
toast.success('email is sent to your account please verify it')
setEmail('')
setName('')
setPassword('')

 router.push('/login')
   }
  
window.localStorage.setItem("user",JSON.stringify(parsedData.parsedData))
  
   
    } catch (error) {
      toast.error(error)
     
    }
 
    
   }
   
  return (
    <>
    <div className={styles.container} >
      <div className={styles.formController}><h1>Register</h1>
      
      <div>
      <p>
       name
      </p>
      <input name='name' className={styles.inputField} 
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text" placeholder='name'/>
      
      </div>

       
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
      <p>
       Confirm Password
      </p>
      <input name='name'className={styles.inputField} 
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
       type="text" placeholder='Confirm-password'/>
      
      </div>
      <div>
      <button  onClick={submitData}className={styles.Btn}>Submit</button>
      
      </div>
      </div>

      </div>
    </>
  
   
  )
}

export default Register