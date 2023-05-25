import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../Component/Product'
import { useState,useEffect, useContext} from 'react'
import { UserContext } from '../Context'



export default function Home({product}) {

  const [success,setSuccess] = useState(false)
  /* eslint-disable no-use-before-define */
  const {selectedProduct,setSlectedProduct} = useContext(UserContext)


  useEffect(() => {

  if(window.location.href.includes('success')){
    
    setSlectedProduct([])
    setSuccess(true)
  }
  }, [selectedProduct])


/* eslint-enable no-use-before-define */
  return (
    
    <div className={styles.container}>
      
      <Head>
        <title>MYPRODUCT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
       <div className={styles.imageContainer}> 
       <h1>Welcome To <br/>My Product Webiste</h1>
      
       </div>
       
       
      <div className={styles.productContainer}>
       {product.map((item,index) =>(
         
        <Product
        key={index}
        image={item.product_img}
        dis={item.product_dis.substring(0,60,)+"..."}
        price={item.price}
        name ={item.product_name}
        id ={item.product_id}
       />
  
       ))}
     </div> 
    </div>
  )
}
export  async function getServerSideProps(context){
  const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://stirring-concha-23486f.netlify.app"
  const res = await fetch(`${API}/api/products`,{
    method: "GET"
  }
  )
  const allProduct = await res.json()
 

  return {
    props: {product:allProduct}, // will be passed to the page component as props
  }

}