
import React from 'react'
import Product from './Products/page'
import ContactUs from './ContactUs/page'
import HomeSlider from './_Component/HomeSlider/page'





export default  function Home() {
  
  return (<section className='w-full'>
    <HomeSlider/>
    <section className='w-[90%] m-auto'>
   <div className='my-10'>
   <div className='grid grid-cols-12 gap-4'>
    <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6'>
    <img src='https://vue-ecom.vercel.app/img/new.jpg' className='w-full'/>
    </div>
    <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6'>
    <h3 className='text-2xl font-bold text-red-500'>New minimalist</h3>
    <p>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom. You won’t miss a sunrise. You’ll rise with the sun.
You’ll never run away from the storm. You will flow with the wind.
Don’t hesitate to pause. Follow the flow of the moment. And then, take the first step towards the new you.</p>
    </div>
   
    </div>

    <div className='grid grid-cols-12 gap-4 mt-8'>

   <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 order-last md:order-first lg:order-first xl:order-first'> 
    <div className='flex flex-col justify-center items-end'>
    <h3 className='text-2xl font-bold text-red-500'>Save Space</h3>
    <h4 className='text-2xl font-bold '>more freedom</h4>
    <p>Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom. You won’t miss a sunrise. You’ll rise with the sun. You’ll never run away from the storm. You will flow with the wind. Don’t hesitate to pause. Follow the flow of the moment. And then, take the first step towards the new you.
    </p>
    </div>
   </div>


    <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 '>
   <img src='https://vue-ecom.vercel.app/img/33.jpg' className='w-full'/>
   </div>
    </div>

   </div>
    <Product/>
    <ContactUs/>
    </section>
    </section>
  )
   
    
}