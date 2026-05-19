import React from 'react'
import {Container,Logo,LogoutBtn} from "../index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function Header() {

  const authStatus = useSelector((state)=> state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name : "Home",
      slug : "/",
      active : true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='relative overflow-hidden bg-slate-950 text-white shadow-lg'>
      <div className='absolute inset-0'>
      <div className='absolute top-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl'></div>
      <div className='absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl'></div>
      </div>
       <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]'></div>
      <Container>
         <nav className='relative z-10 flex items-center py-3'>
          <div className='mr-4'>
             <Link to="/">
              <Logo width='70px' />
             </Link>
          </div>  
          
          <ul className='ml-auto flex items-center gap-2'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                 <button onClick={()=>{navigate(item.slug)}} 
                 className='rounded-full px-6 py-2 font-medium text-slate-200 transition duration-300 hover:bg-white/10 hover:text-cyan-400'>
                  {item.name}
                 </button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li className='ml-2'>
                  <LogoutBtn />
                </li>
              )}
          </ul>
         </nav>
      </Container>
    </header>
  )
}

export default Header