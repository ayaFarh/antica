import Link from 'next/link'
import React from 'react'

async function getAllProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    return res.json()
}

export default async function Products() {
    const products = await getAllProducts()

    return (
        <div  className='grid grid-cols-12 gap-4 pb-4 w-[90%] m-auto mt-20'>
            {products.map((product) => (
                <Link href={"/Products/"+product.id} key={product.id} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 text-center border-2 rounded-lg overflow-hidden hover:scale-105 duration-300 shadow-xl'>
                    <img src={product.images[0]} alt={product.title} className='w-full'
                    />
                    <div className='p-4'>
                        <h2>{product.title}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}
