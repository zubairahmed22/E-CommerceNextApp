
import styles from "../styles/manageProduct.module.css"
import {DeleteTwoTone } from "@ant-design/icons"
import {EditTwoTone } from "@ant-design/icons"
import Link from 'next/link'
import {parseCookies}from "nookies"
import moment from 'moment';


const allProduct = ({product}) => {


  const handleDelete =  async(id) =>{
    
    try {
      const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://e-commerce-next-ap-p.vercel.app"
      const deleteCate =  await fetch(`${API}/api/pro/${id}`,{
        method: "DELETE"
      })
    } catch (error) {
      console.log(error)
    }
    }



  return (
    <div className={styles.main}>
      
      <div>
      <h1>All Product </h1>
      {product?.map((product,index) =>(
        <div key={product.product_id} className={styles.lisproduct} >
        <div className={styles.item} >
        <h5>name </h5>
        <p>{product.product_name.substring(0,20)+"..."}</p>
        </div>
       
        <div className={styles.item}>
        <h5>price</h5>
        <p>{`Rs: ${product.price}`}</p>
        </div>
        <div className={styles.item}>
        <h5>stok</h5>
       <p>{product.stok}</p> 
        </div>
      
     
        <div className={styles.item}>
       <h5>discription</h5>
       <p>{product.product_dis.substring(0,20)}...</p>
       </div>
      
        <div className={styles.item}>
       <h5>date</h5>
       <p>{moment(product.created_on).format("YYYY-MM-DD h hh:mm")}</p>
       </div>
       <div className={styles.imagebox}>
     
      <img src={product.product_img}alt="image" className={styles.image}/>
      </div>
      <div className={styles.button}>

       <button className={styles.btnD} onClick={() => handleDelete(product.product_id)}>< DeleteTwoTone twoToneColor='#D82E2F'/></button>
      <button className={styles.btnE}>  <Link  href={`/${product.product_id}/editproduct`}><a><EditTwoTone/> </a></Link> </button>
       </div>
    </div>
    
      ))}
       </div> 
    </div>
  )
}

export  async function getServerSideProps(ctx){
  const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://e-commerce-next-ap-p.vercel.app"
  const res = await fetch(`${API}/api/products`,{
    method: "GET"
  }
  )
  const allProduct = await res.json()
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
   if(token && user.user_role == 1){
     const {res} = ctx
     res.writeHead(302,{location:"/manageproduct"})
     res.end()
   }

  return {
    props: {product:allProduct}, // will be passed to the page component as props
  }

}



export default allProduct