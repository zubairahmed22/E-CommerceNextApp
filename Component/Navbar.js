import React, {useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import {ShoppingCartOutlined}from "@ant-design/icons"


import Link from 'next/link'
import {useContext}from "react"
import { UserContext } from '../Context'
import { useRouter } from 'next/router'
import {parseCookies}from "nookies"
import Cookies from 'js-cookie'
import {useSyncExternalStore} from "react";
import { loadStripe } from '@stripe/stripe-js';
import dynamic from "next/dynamic";



// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

const Navbar = () => {
  const [isOpen ,SetIsOpen] = useState("none")
  const [name,setName] = useState('')
  const [street,setStreet] = useState('')
  const [email,setEmail] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState(0)
  const [loading, setLoading] = useState(false) 
  const [idProduct,setIdPorduct] =  useState([])
  const {state,setState} =  useContext(UserContext)
 
  const {selectedProduct,setSlectedProduct} = useContext(UserContext);
  const cookie = parseCookies()
  const user = cookie.user? JSON.parse(cookie.user): ""
  const token = cookie.token


  const router = useRouter()
  const handleCart = ()=> {
  SetIsOpen("block")

  }


  
  
  const logout = () => {

    Cookies.remove("token")
    Cookies.remove('user')
    router.push('/login')

   
    }

  useEffect(() =>{
  localStorage.setItem('cartitem',JSON.stringify(state.cart))
  },[state.cart])



    useEffect(() =>{
    const uniqId =  [...new Set(selectedProduct)]
    console.log('checking uniqID',uniqId)
     fetch('http://localhost:3000/api/cartId?ids='+ uniqId.join(','))
    .then((response) => response.json())
    .then((data) => setIdPorduct(data))
     console.log("all product",idProduct)
     console.log(selectedProduct)
  
  },[selectedProduct])
  


const addMoreProduct =  (id) =>{
 setSlectedProduct(prev => [...prev, id])
 
}


const lessProduct = (id) =>{
  const findId =  selectedProduct.indexOf(id)
  
  if(findId !== -1){

  setSlectedProduct(prev => {
  
    return prev.filter((value, index) => index  !==  findId)
    
  })
  }
}

const subtotal = 0;
const delivery = 200
if( selectedProduct?.length){
  for(let id of selectedProduct){
    
   
    const price = idProduct.find(p =>  p.product_id === id)?.price || 0
   subtotal += price
   
   
   
 
  }
}
const total = subtotal + delivery


  return (
   
    <div className={styles.Container}>
      <div className={styles.logo}>
        <Link href="/"><h4 className={styles.logoStyle}><a>MYPRODUCT</a></h4></Link>
       
      </div>
      
      <div className={styles.rightContainer}>
        <ul>  
        
        
      
              
           
          {token && user && user[0].user_role == 1? (<>
           
            <li><Link href="/admain"><a>Dashboard</a></Link></li>  
            <li><Link href="/"><a>Home</a></Link></li>
             <li><Link href="/profile"><a>Profile</a></Link></li>
             <li onClick={logout}><Link href="/login"><a>Logout</a></Link></li>
           </>
          
           ) : token && user && user[0].user_role == 0 ?
           <>
           <li><Link href="/"><a>Home</a></Link></li>
           <li><Link href="/profile"><a>Profile</a></Link></li>
           <li onClick={logout}><Link href="/login"><a>Logout</a></Link></li>
           </>:
            
            <>
      
            <li><Link href="/login"><a>Login</a></Link></li>
            <li><Link href="/register"><a>Register</a></Link></li>
            
          
            </>
            
           }
          
          
          
        
        
         
       
        
      
        
        </ul>
        </div>
        <div className={styles.leftcart}>
          <ul>
          <li className={styles.cart}>
            <ShoppingCartOutlined style={{ fontSize: '22px', marginRight: '20px', marginTop: '-15px', position: 'fixed' }} onClick={handleCart}/>
             <span className={styles.number}>{ selectedProduct && selectedProduct.length}</span> </li>
          </ul>
          
          </div>
         
          <div className={styles.cartContainer} style={{display: isOpen}}>
          <h5 className={styles.shopingText}>Shopping Cart</h5>
          {!idProduct.length && (<div>
            <h4 className='text'> <style>{`
              .text{
                margin-left: 10px;
             
              }
            `}</style> no product in your shoping cart</h4>
          </div>)}
          {idProduct.length && (
            <div>
            {idProduct.length && idProduct?.map(item => {
              const amount = selectedProduct.filter(id => id === item.product_id).length
              if(amount === -1) return
              return(
              <div className={styles.superContainer} key={item.product_id}>
             <div className={styles.main} key={item.product_id}>
             
             <div className={styles.cartImg}>
               <img src={item.product_img} className={styles.imgSize}/>
               
             </div>
             <div className={styles.secondContainer}>
             <div>
             <h6 className={styles.fontSize}>{item.product_name}</h6>
             <p className={styles.discription}>{item.product_dis.substring(0,35)}</p>
             </div>
           
             
            </div>
              </div>
              <div className={styles.thridContainer}>
             <div className={styles.priceContainer}>
              <h6 className={styles.fontSize}>{`Rs: ${item.price}`}</h6>
              
            </div>
              <div> 
              <button className={styles.btn} onClick={() => lessProduct(item.product_id)}>-</button> 
              {selectedProduct.filter(id => id == item.product_id).length} 
              <button className={styles.btn} onClick={() => addMoreProduct(item.product_id)}>+</button>
                
              </div>
             </div>
              </div>
            
            )})}
               <form action="/api/checkout" method="POST">
             <div className={styles.checkout}>
              
              <input type="text" name="street"  required value={street}onChange={e => setStreet(e.target.value)}placeholder='Street-address,number' className={styles.textfield}/>
              <input type="text" name='city' required value={city}onChange={e => setCity(e.target.value)}placeholder='City and postal code' className={styles.textfield}/>
              <input type="text"name='name' required value={name}onChange={e => setName(e.target.value)}placeholder='Name' className={styles.textfield}/>
              <input type="text" name="email" required value={email}onChange={e => setEmail(e.target.value)}placeholder='Email address' className={styles.textfield}/>
              <input type="text" name="phone" required value={phone}onChange={e => setPhone(e.target.value)}placeholder='Enter Phone-No' className={styles.textfield}/>
             </div>
             <div className={styles.totalContainer}>
              <div className={styles.subtotal}>
                <h5>Subtotal</h5>
                <h6>{subtotal}</h6>
              </div>
              <div className={styles.subtotal1}>
                <h5>Delivery</h5>
                <h6>{delivery}</h6>
              </div>
              <div className={styles.subtotal2}>
                <h5>Total</h5>
                <h6> Rs: {total}</h6>
              </div>
              <input type="hidden" name="products" value={selectedProduct.join(',')}/>
              <div className={styles.buttonDev}>
                <button  type="submit" className={styles.paymentBtn }>pay {total}</button>
              </div>
             </div>
             </form>
            </div>
            
          )}
          
           <span  className={styles.axe}onClick={() => SetIsOpen("none")}>X</span>
           
          </div>
          
    </div>
    
  )
  
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

