import React from 'react'
import styles from "../styles/ManageCate.module.css"
import {DeleteTwoTone } from "@ant-design/icons"
import {EditTwoTone } from "@ant-design/icons"
import { useContext } from 'react'
import { UserContext } from '../Context'
import {useRouter} from "next/router"
import Link from 'next/link'
import {parseCookies}from "nookies"
import { API } from '../Component/Backend'
const Managecategory = ({newcate}) => {

  
  
const handleDelete =  async(id) =>{
try {
  const deleteCate =  await fetch(`${API}/api/cate/${id}`,{
    method: "DELETE"
  })
} catch (error) {
  console.log(error)
}
}


  
  return (
    <div className={styles.dev}>
   
    <div className={styles.listdiv}>
    <h1>All Category</h1>
    
     
      
        {newcate?.map((item,index) =>(
        
            <div className={styles.allctegoy} key={index}>
            <p  key={item.cate_id}> {item.cate_name} </p>
           <p className={styles.edit}> <Link href={`/${item.cate_id}/edit`}><EditTwoTone/></Link></p>
            <p onClick={() => handleDelete(item.cate_id)}><DeleteTwoTone twoToneColor='#D82E2F'/></p>
            </div>
        
          
         ))} 
        
       
      
       
 
    
      
    </div>
    </div>
  )

 
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`${API}/api/category`,{
    method: "GET"
  }
  )

  const alldata = await res.json()
 
  const cookie  = parseCookies(ctx)
  const user = cookie.user ? JSON.parse(cookie.user): ""
  const token = cookie.token 
  if(!token){
    const {res} = ctx
    res.writeHead(302,{location:"/login"})
    res.end()
  }
  // if(token  && user.user_role !== 1){
  //   const {res} = ctx
  //   res.writeHead(302,{location:"/"})
  //   res.end()
  // }
   if(user && user.user_role == 1){
     const {res} = ctx
     res.writeHead(302,{location:"/Managecategory"})
     res.end()
   } 
    return {
      props: {newcate:alldata}, // will be passed to the page component as props
    }
  }

export default Managecategory