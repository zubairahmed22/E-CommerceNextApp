
import React,{useState} from 'react'
import styles from '../styles/product.module.css'
import { useRouter } from "next/router";
import {toast}from "react-toastify"
import {CameraTwoTone}from "@ant-design/icons"
import {parseCookies}from "nookies"
import dynamic from "next/dynamic";
import API from "../Component/Backend"


const Product = ({newcate}) => {



  const [name,setName] = useState('')
  const [stok,setStok] = useState(0)
  const [price,setPrice] = useState(0)
  const [discription,setDiscription] = useState('')
  const [image, setImage] = useState('')
  const [cateId, setCateId] = useState(0)



  const router = useRouter();
  


  
const handleImage = async(e) =>{
const file =  e.target.files[0]
const formData = new FormData()
formData.append('image', file)

try {
  const data = await fetch(`${API}/api/imagefile`,{
    method: "POST",
    
    body: formData
    
  })
const res = await data.json()

setImage(res.url)
} catch (error) {
  console.log(error)
}

}
  

   const submitData = async() =>{
   
    try {
      
      const data  =  {name, stok,price, discription,image,cateId}
      
      const response = await fetch('http://localhost:3000/api/products',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
  
     },
     body: JSON.stringify(data)
    
    })
const parsedData =  await response.json();

   if(parsedData.error){
    toast.error(parsedData.error)
    console.log("show error",parsedData.error)
    
   }else{

   toast.success(parsedData.success)
   setName('')
    setPrice('')
    setStok('')
    setDiscription("")
    setImage('')
    setCateId('')
   }
  
 
  
   
    } catch (error) {
      toast.error('Error is accored')
     
    }
 
    
   }
   
  return (
    <>
    <div className={styles.container} >
    
      <div className={styles.formController}>
      <h1>Create Product</h1>
      <p> Product Image </p>
      <div className={styles.imagebox}>
      
     
    
      {
        image && image ? <image className={styles.imgstyle} src={image}/> :      <CameraTwoTone  style={{ fontSize: '30px', color: '#08c',marginLeft: '230px', position: "absolute", marginTop: '10px' }}/>
      }
    

      <input name='name' className={styles.inputFele} 
      onChange={handleImage}
      type="file" accept='images/*'/>
      
      </div>
       
      


      <div>
      <p>
       product name
      </p>
      <input name='name' className={styles.inputField} 
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text" placeholder='name'/>
      
      </div>

       
      <div>
      <p>
       Stok
      </p>
      <input className={styles.inputField} 
      value={stok}
        onChange={(e) => setStok(e.target.value)}
       type="text"   placeholder='stok'/>
      </div>
 
      
      
 
      <div>
      <p>
      Price
      </p>
      <input name='name'className={styles.inputField} 
      value={price}
      onChange={(e) => setPrice(e.target.value)}
       type="number" placeholder='price'/>
      
      </div>
      <div className={styles.selectCate}>
      <p>
       Select category
      </p>
      <select
      onChange={(e) => setCateId(e.target.value)}
      >
      {newcate?.map((item,index) =>(
           <option value={item.cate_id} key={index}>{item.cate_name}</option>
      ))}
      
      </select>
      </div>
      <div>
      <p>
     discrptions
      </p>
      <textarea name='name'className={styles.textarea} 
      value={discription}
      onChange={(e) => setDiscription(e.target.value)}
       type="text" placeholder='discrptions'/>
      </div>
      


      
      <div>
      <button  onClick={submitData}className={styles.Btn}>Submit</button>
      </div>


      
      
      
      </div>

      </div>
    </>
  
   
  )
}



  
export default dynamic (() => Promise.resolve(Product), {ssr: false})

export async function getServerSideProps(ctx) {

  const resp = await fetch(`/api/category`,{
    method: "GET"
  }
  )

  const alldata = await resp.json()
  console.log(alldata)
  const cookie  =  parseCookies(ctx)
  const token =  cookie.token
 const user = cookie.user ? JSON.parse(cookie.user): ""
 if(!token){
  const {res} = ctx
  res.writeHead(302,{location:"/login"})
  res.end()
}
// if(token  && user.user_role !=1){
//   const {res} = ctx
//   res.writeHead(302,{location:"/"})
//   res.end()
// }
  if(token  && user.user_role == 1){
    const {res} = ctx
    res.writeHead(302,{location:"/createproduct"})
    res.end()
  }

    return {
      props: {newcate:alldata}, // will be passed to the page component as props
    }
  }
  