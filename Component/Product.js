import React,{useContext, useState,useEffect} from 'react'
import Styles from "../styles/image.module.css"

import { UserContext } from '../Context'
import {parseCookies}from "nookies"
import { useRouter } from 'next/router'
import Link from 'next/link'
import dynamic from "next/dynamic";

const Product = ({price,dis,image,name,id}) => {
  
  const router = useRouter();
  
  
  const cookie = parseCookies()
  const token = cookie.token
  


const {selectedProduct,setSlectedProduct} = useContext(UserContext)
const addProduct = () =>{
  

  
  
  setSlectedProduct(prev=>[...prev,id])

  }

  
  return (
    <div>
      
     
      
     
      
       <div  className={Styles.image} >
    
       <Link href={{
        
        pathname: `/[id]/`, 
        query: {id: id},
      
         // Will pass `?lang=en` as query param
    }}  passHref> 
      
        <img src={image} className={Styles.IGM} />
        
        </Link>
        <h4 className={Styles.name}>{name}</h4>
        <p className={Styles.paragraph}>{dis}</p>
        < p className={Styles.price}> {`Rs: ${price}`}</p>
      
      
        {!token?(
          
          <button className={Styles.cartButton}>  <Link href="/login"><a>Add To Cart</a></Link> </button>
          
        )
        :(<>
        <button className={Styles.cartButton} onClick={ addProduct}>Add To Cart</button>
        </>)
        
        }
       
       
           
       </div>
      
    
   
    </div>
  )
}

export default dynamic (() => Promise.resolve(Product), {ssr: false})
export async function getServerSideProps(context) {
  return {
  props: {},
  };
  }