import Navbar from "./Navbar"
import Footer from "./Footer"
import { useContext, useState,useEffect } from "react"
import { UserContext } from "../Context"
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  const [success,setSuccess] = useState(false)
  const {selectedProduct,setSlectedProduct} = useContext(UserContext)

  useEffect(() => {

  if(window.location.href.includes('success')){
    
    setSlectedProduct([])
    setSuccess(true)
  }
  }, [])

  function setDisplayNone(){
    setSuccess(false)
  }
  setTimeout(setDisplayNone,7000)
  
    return (
      <>
        <Navbar />
        <div className={styles.success}>
       {
          success &&(
            <div id="hideMeAfter5Seconds" style={{backgroundColor: '#49be25', marginTop: '20px',width: '500px', align: 
            'center',borderRadius: '5px', color: 'white', textAlign: 'center',padding:' 10px'}}>
            Thanks For Your Order
           
        </div>
          )
        
        }
       </div>
        <main>{children}</main>
        <Footer />
      </>
    )
  }