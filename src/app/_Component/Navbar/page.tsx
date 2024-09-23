
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


export default function Navbar() {
  const [isVisable,setisVisable]=useState(true)
  const toggleVisable = ()=>{
    setisVisable(!isVisable)
  }

  const path = usePathname()

  return (
    <nav className='fixed md:w-[90%] w-full bg-white opacity-90 md:left-[5%] left-0  top-[3%] right-0 p-3 shadow-xl z-10 md:rounded-full rounded-xl '>
<div className='md:flex block items-center justify-between gap-4'>
 <div className='flex items-center justify-between'>
 <h2 className='text-xl rounded-br px-2 bg-current rounded-full'><Link href="/" className='text-white'>Antica</Link></h2>
 <FaBars  className=' md:opacity-0 opacity-1' onClick={toggleVisable}/>
 </div>
 {isVisable && (<>
 <div className='md:flex block'>
    <ul className='gap-8  md:flex block md:m-0 mt-4'>

      <li>
        <Link href='/' className={path === "/" ? "active" : ""}>Home</Link>
      </li>
      <li>
        <Link href='/Products' className={path === "/Products" ? "active" : ""}>Products</Link>
      </li>
      <li>
        <Link href='/ContactUs' className={path === "/ContactUs" ? "active" : ""}>Contact us</Link>
      </li>
    </ul>
  </div>
  <div className='flex justify-center items-center gap-4'>
  <Link href="#" className=''><FaFacebook/></Link>
  <Link href="#" className=''><FaTwitter /></Link>
  <Link href="#" className=''><FaYoutube /></Link>
  <Link href="#" className=''><FaInstagram/></Link>
  </div>
 </>)}
</div>
    </nav>
    
  )
}
