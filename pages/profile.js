import React, { useState,useEffect } from 'react'
import styles from '../styles/Register.module.css'
import { UserContext } from '../Context'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import {parseCookies}from "nookies"
const Profile = () => {
  const [email,setEmail] =  useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [changeState,setChangeState] = useState(false)
  console.log(email,name)

  const cookie =  parseCookies()
  const user = cookie.user ? JSON.parse(cookie.user): ""

 
  const id = user  && user[0].user_id
 
  const updateProfile = async () =>{
    
    console.log('checking id',id,name)
    
    const data =  {name,email, password, id}
    console.log(data)
    try {
    
      
      const response = await fetch('/api/profile-update',{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
    
       },
       body: JSON.stringify(data)
      });
      const parseRes = await response.json()
      console.log("checking response",parseRes)
     
      if(parseRes.error){
          toast.error(parseRes.error)
          console.log(error)
      }else{
        toast.success(parseRes.message)
        setChangeState(true)
      }
     
  
  } catch (error) {
     
    }
  }
  useEffect(() =>{
    if(user && user){
      
       
      
       setName(user[0].user_name)
       setEmail(user[0].user_email)
    

    }
   },[user && user])
  return (
    <>
    <div className={styles.container} >
      <div className={styles.formController}><h3>Update Profile</h3>
      
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
       type="text"  name='email' placeholder='email'/>
      </div>
 
      
      
 
     
      <div>
      <button className={styles.Btn} onClick={updateProfile}>Update</button>
      
      </div>
      </div>

      </div>
    </>
  
  )
}

export default Profile