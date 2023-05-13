import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '../Component/Layout';
import{UserProvider}from "../Context"

function MyApp({ Component, pageProps }) {
  return <>
   <UserProvider>
  
  
  <ToastContainer position="top-center" />
 
  <Layout>
  <Component {...pageProps} />
  </Layout>
 
  </UserProvider>
  </>
 
}

export default MyApp
