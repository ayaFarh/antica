import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
}

async function getAllProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  return res.json();
}

export default async function ProductDetails({ params }: { params: { ProductDetails: string } }) {
  const res: Product = await getAllProduct(params.ProductDetails);

  return (
    <>
      <div className='grid grid-cols-12 pb-4 min-h-screen mt-20 w-[90%] m-auto'>
        <div className='col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4'>
          <Image src={res.images[0]} alt={res.title} className='w-full' width={500} height={500} />
        </div>
        <div className='col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8 p-4 text-center flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold'>{res.title}</h2>
          <p>{res.description}</p>
        </div>
      </div>
    </>
  );
}
