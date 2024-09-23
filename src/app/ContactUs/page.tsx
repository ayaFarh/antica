import React from 'react'

export default function ContactUs() {
  return (
   <section className='flex flex-col items-center justify-center min-h-screen'>
    <h2 className='text-3xl font-bold mb-10 text-red-500'>Contact Us</h2>
     <div className='grid grid-cols-12 w-[80%]'>
<div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6'>
  <h3 className='text-2xl font-bold pb-2'>Join our Newsletter</h3>
  <p>Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
</div>
<div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6'>
  <form>
    <input type='email' placeholder='Your E-mail' className='w-full border-b-2 p-2' />
    <button type='button' className='p-4 bg-red-300'>Subscribe</button>
  </form>
 
  </div>
    </div>
   </section>
  )
}
