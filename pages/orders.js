import React, { useState } from 'react'
import styles from "../styles/order.module.css"
import Link from 'next/link'
import { API } from '../Component/Backend'

const orders = ({orderData}) => {



  return (
    <div className={styles.Container}>
      <div className={styles.center}>
      <h1>Orders</h1>
      </div>
     
      {orderData.map((order,index) =>(
       
          <div className={styles.main} key={index}>
          
          <div className={styles.mainContainer} >
         
            <div  className={styles.lisproduct} >
            <div className={styles.item} >
            <h5>Name </h5>
            <p>{order.user_name}</p>
            </div>
           
            <div className={styles.item}>
            <h5>Email</h5>
            <p>{order.user_email}</p>
            </div>
            <div className={styles.item}>
            <h5>Address</h5>
           <p className={styles.cityAddress}>{order.user_address}</p> 
            </div>
          
         
            <div className={styles.item}>
           <h5>City</h5>
           <p>{order.user_city}</p>
           </div>
          
            <div className={styles.item}>
           <h5>Mobile-No</h5>
           <p>{order.phone_no}</p>
           </div>
           <div className={styles.imagebox}>
           <h5>products</h5>
        
            {order.products.map((item, index) => {
            let data = JSON.parse(item)
           
            return <div className={styles.listITem} key={index}> 
             <p>{data.price_data.product_data.name.substring(0,10)}</p>
             <h5>({data.quantity})</h5>
            
            </div>
            })}
              
             
           
         
          </div>
          <div className={styles.item}>
           <h5>Total Products</h5>
           <p>{order.products.length}</p>
           </div>
          
        </div>
        
         
           </div> 
        </div>
      ))}
      
    </div>
  )
}

export default orders

export async function getServerSideProps(contex){
const order = await fetch(`${API}/api/getOrders`)
const allOrders = await order.json();
console.log(allOrders)

return{
 props:{ orderData: allOrders}
}
}