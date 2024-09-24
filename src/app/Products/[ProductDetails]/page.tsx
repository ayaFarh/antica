import React from 'react'


async function getAllProduct(id :any) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  return res.json()
}
export default async function ProductDetails({params}:any) {
  console.log(params.ProductDetails);
  const res = await getAllProduct(params.ProductDetails)
  return (
   <>
    <div className='grid grid-cols-12 pb-4 min-h-screen mt-20 w-[90%] m-auto'>
    <div className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4'>
      <img src={res.images} alt={res.title} className='w-full' />
    </div>
    <div className='col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 p-4 text-center flex flex-col justify-center items-center'>
    <h2 className='text-2xl font-bold'>{res.title}</h2>
    <p>{res.description}</p>
    </div>
    </div>
   </>

  )
}