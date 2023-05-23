import React , {useState}from'react'
import styles from "../../styles/Register.module.css"
import {toast}from "react-toastify"
import {useRouter} from 'next/router'


const EditCategory = ({update}) => {
 const {cate_name} = update[0]
  const router = useRouter()
  const id = router.query.id


const [category,setCategory] = useState(cate_name) 
const updateCategory = async() =>{
  try {
    const content = {category}
    const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://e-commerce-next-ap-p.vercel.app"
    const data = await fetch(`${API}/api/cate/${id}`,{
      method:"PUT",
      headers: {
        'Content-Type': 'application/json'
  
     },
     body: JSON.stringify(content)
    })
    const newdata = await data.json()

    if (newdata.success.false){
      setCategory("")
      toast.error(newdata.success.false)
      
    }else{
      router.push("/Managecategory")
      toast.success("Category is created sucessfully")
    }

  } catch (error) {
    console.log(error)
  }

}
  return (

    <>
    
    <div className={styles.container} >
      <div className={styles.formController}><h1>Update Category</h1>
      
      

       
      <div>
      <p>
     category
      </p>
      <input className={styles.inputField} 
      value={category}
        onChange={(e) => setCategory(e.target.value)}
       type="text"  resource='' placeholder='add category'/>
      </div>
 
      
      
 
      

      <div>
      <button  className={styles.Btn} onClick={updateCategory}>Update</button>

      
      </div>
      
      </div>
     
      </div>
    </>
  )
}

export async function getServerSideProps({params}) {
  const id = params.id
  const API=process.env.NODE_ENV != "production"? "http://localhost:3000" : "https://e-commerce-next-ap-p.vercel.app"
  const res = await fetch(`${API}/api/cate/${id}`,{
    method: "GET"
  }
  )
 const updateData = await res.json()

    return {
      props: {update:updateData}, // will be passed to the page component as props
    }
  }
export default EditCategory 