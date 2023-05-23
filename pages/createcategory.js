import React , {useState}from'react'
import styles from "../styles/Register.module.css"
import {toast}from "react-toastify"
import {parseCookies}from "nookies"
import API from '../Component/Backend'

const Createcategory = () => {

const [category,setCategory] = useState('')
  
const addCategory = async() =>{

  try {
    const content = {category}
    const data = await fetch(`/api/category`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
  
     },
     body: JSON.stringify(content)
    })
    const newdata = await data.json()

    if (newdata.success.false){
      setCategory("")
      toast.error(newdata.success.false)
    }else{
      toast.success("Category is created sucessfully")
    }
    router.push('/admain')
   rou
  } catch (error) {
    console.log(error)
  }

}
  return (

    <>
    
    <div className={styles.container} >
      <div className={styles.formController}><h1>Create Category</h1>
      
      

       
      <div>
      <p>
     category
      </p>
      <input className={styles.inputField} 
      value={category}
        onChange={(e) => setCategory(e.target.value)}
       type="text"  resource='' placeholder='add category'/>
      </div>
 
      
      
 
      

      <div>
      <button  className={styles.Btn} onClick={addCategory}>Add Category</button>

      
      </div>
      
      </div>
     
      </div>
    </>
  )
}

export async function getServerSideProps(ctx){
  const cookie  = parseCookies(ctx)
  const token = cookie.token
 const user = cookie.user ? JSON.parse(cookie.user): ""
 if(!token){
  const {res} = ctx
  res.writeHead(302,{location:"/login"})
  res.end()
}
if(token  && user.user_role !== 1){
  const {res} = ctx
  res.writeHead(302,{location:"/"})
  res.end()
}
  if(token && user.user_role == 1){
    const {res} = ctx
    res.writeHead(302,{location:"/login"})
    res.end()
  }
  
  return{
    props: {}
  }
}


export default Createcategory