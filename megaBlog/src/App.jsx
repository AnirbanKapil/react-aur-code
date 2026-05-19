import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import {Footer, Header} from "./components/index"
import { Outlet } from 'react-router-dom';


function App() {
  
  const [loading,setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(useDispatch) {
        dispatch(login(userData))
      }else{
        dispatch(logout)
      }
    })
    .finally(()=> setLoading(false))
  },[])

  return !loading ? (<div className='min-h-screen flex flex-col bg-slate-300'>
  
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    
    </div>) : <div className='min-h-screen flex items-center justify-center bg-gray-400'>
      <div className='flex flex-col items-center gap-4'>
      <div className='h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent'></div>
      <p className='text-white text-lg font-medium'>Loading...</p>
      </div>
      </div>
}

export default App
