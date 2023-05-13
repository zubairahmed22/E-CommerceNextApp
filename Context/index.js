import {useState, createContext, useEffect    } from 'react'
import { useRouter } from 'next/router';
import useLocalStorageState from 'use-local-storage-state'

    const UserContext = createContext();

const UserProvider = ({children}) =>{
const [state,setState] = useState({
    user:{},
    token: "",
    cart: []
    
    
    
})
const [selectedProduct,setSlectedProduct] = useLocalStorageState('product',{defaultValue:[]})


return(
    <UserContext.Provider value={{state,setState,selectedProduct,setSlectedProduct}}>
       {children} 
    </UserContext.Provider>
)
}
export  {UserContext,UserProvider}