import React, { useContext,useEffect,useState } from 'react'
import styles from "../../styles/productDetail.module.css"
import { useRouter } from 'next/router'


import { UserContext } from '../../Context'
import dynamic from "next/dynamic";
// import API from '../../Component/Backend';
const Details = ({productItem}) => {

 
  
const {selectedProduct,setSlectedProduct} =  useContext(UserContext)

  const router = useRouter()

  const {product_img,product_name,  product_dis, price, stok,product_id} = productItem[0]
  

  const addProduct = () =>{
  
    const {id} = router.query
     
    setSlectedProduct(prev=>[...prev,id])
     
    }

   

  return (
    
    <div className={styles.main}>
     <div className={styles.imageBox}>
      <div>
        <h3></h3>
      </div>
      
      <div>
        
        <img src={product_img} alt="image" className={styles.image}/>
      </div>
     
     </div>
     <div className={styles.contentBox}>
     <h4>{product_name}</h4>
     <p>{product_dis}</p>
      <p> <span className={styles.stokcolor}>In Stock </span> {stok}</p>
     <div>

     </div>
    


                   
     </div>
     
    </div>
   
  )
}

export default dynamic (() => Promise.resolve(Details), {ssr: false})


export async function getServerSideProps({params}){
  const id = await params.id
  
  const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://e-commerce-next-ap-p.vercel.app"
  try {
    const singleProduct = await fetch(`${API}/api/pro/${id}`,{
    method: "GET"
  })
const product = await singleProduct.json()
console.log(product)


return{
  props:{productItem:product}, // will be passed to the page component as props
}
  } catch (error) {
    console.log(error)
  }
  
}