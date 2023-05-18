import React , {useState}from'react'
import styles from "../../styles/Register.module.css"
import {toast}from "react-toastify"
import {useRouter} from 'next/router'
import API from '../../Component/Backend'

const EditCategory = ({update}) => {
 const {cate_name} = update[0]
 console.log("finding name",cate_name)
  const router = useRouter()
  const id = router.query.id


const [category,setCategory] = useState(cate_name) 
const updateCategory = async() =>{
  try {
    const content = {category}
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
  console.log(id)
  const res = await fetch(`${API}/api/cate/${id}`,{
    method: "GET"
  }
  )
 const updateData = await res.json()
 console.log(updateData)
    return {
      props: {update:updateData}, // will be passed to the page component as props
    }
  }
export default EditCategory 