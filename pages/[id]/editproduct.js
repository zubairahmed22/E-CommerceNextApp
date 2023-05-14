
import React,{useState} from 'react'
import styles from '../../styles/product.module.css'
import { useRouter } from "next/router";
import {toast}from "react-toastify"
import {CameraTwoTone}from "@ant-design/icons"





const EditProduct = ({update}) => {
  console.log(update)
  const { product_name,stok,price,product_dis,product_img} = update[0]

  const [name,setName] = useState(product_name)
  const [stock,setStok] = useState(stok)
  const [pro_price,setPrice] = useState(price)
  const [discription,setDiscription] = useState(product_dis)
  const [image, setImage] = useState(product_img)
  const [cateId, setCateId] = useState(0)
  console.log( "checking id ====>>>",typeof(image))

 
  const router = useRouter();
  


  
const handleImage = async(e) =>{
const file =  e.target.files[0]
const formData = new FormData()
formData.append('image', file)
console.log([... formData])
try {
  const data = await fetch('http://localhost:3000/api/imagefile',{
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
 
    const id = router.query.id
    try {
      
      const data  =  {name, stock,pro_price, discription,image}
      
      const response = await fetch(`http://localhost:3000/api/pro/${id}`,{
      method: 'PUT',
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
    toast.success(" product is updated sucessfully")
   
    setName('')
    setPrice('')
    setStok('')
    setDiscription("")
  
   }
  
 
  
   
    } catch (error) {
      toast.error('Error is accored')
     
    }
 
    
   }
   
  return (
    <>
    <div className={styles.container} >
    
      <div className={styles.formController}>
      <h1>Update product</h1>
      <p > Product Image </p>
      <div className={styles.imagebox}>
      
     
    
      
        <div style={{display: "flex", flexDirection: "row"}}> <image className={styles.imgstyle} src={image} alt='image'/>
        <CameraTwoTone  style={{ fontSize: '30px', color: '#08c',position: 'absolute', marginLeft: "250px", marginTop: '80px' }}/></div>   
      
    

      <input name='name' className={styles.inputFele} 
      onChange={handleImage}
      type="file" accept='images/*'/>
      
      </div>
       
      


      <div>
      <p style={{marginTop: '20px'}}>
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
      value={stock}
        onChange={(e) => setStok(e.target.value)}
       type="text"   placeholder='stok'/>
      </div>
 
      
      
 
      <div>
      <p>
      Price
      </p>
      <input name='name'className={styles.inputField} 
      value={pro_price}
      onChange={(e) => setPrice(e.target.value)}
       type="number" placeholder='price'/>
      
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
      <button className={styles.Btn} onClick={submitData}>Update</button>
      </div>


      
      
      
      </div>

      </div>
    </>
  
   
  )
}

export async function getServerSideProps({params}) {
  const id = params.id

  const res = await fetch(`http://localhost:3000/api/pro/${id}`,{
    method: "GET"
  }
  )
 const updateData = await res.json()
 console.log(updateData)

    return {
      props: {update:updateData}, // will be passed to the page component as props
    }
  }
  

export default EditProduct 