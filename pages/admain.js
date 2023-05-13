import React from 'react'
import styles from '../styles/admain.module.css'
import Link from 'next/link'
import {parseCookies}from "nookies"
import Cookies from 'js-cookie'
import dynamic from "next/dynamic";


const admain = () => {
  return (
    <>
    <div className={styles.admain}>
    <div className={styles.leftbar}>
        
     <p><Link href="/createcategory">Create Category</Link></p>
     <p><Link href="/createproduct">Create Product</Link></p>
     <p><Link href="/manageproduct">Manage Product</Link></p> 
     <p><Link href="/Managecategory">Manage category</Link></p> 
     <p><Link href="/orders">Manage Orders</Link></p>
     
    </div>
    <div className={styles.rightBar}>
       <h3> Admin Dashboard</h3>
    </div>
    </div>
    </>
  )
}

export default dynamic (() => Promise.resolve(admain), {ssr: false})



export async function getServerSideProps(ctx){
  const cookie  = parseCookies(ctx)
  const token =  cookie.token
 const user = cookie.user ? JSON.parse(cookie.user): ""
  if(!token){
    const {res} = ctx
    res.writeHead(302,{location:"/login"})
    res.end()
  }
  if(token && user && user.user_role != 1){
    const {res} = ctx
    res.writeHead(302,{location:"/"})
    res.end()
  }
  if(token  && user.user_role == 1){
    const {res} = ctx
    res.writeHead(302,{location:"/admain"})
    res.end()
  }
  
  return{
    props: {}
  }
}