import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    images: string[];
}

async function getAllProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export default async function Products() {
    const products: Product[] = await getAllProducts();

    return (
        <div className='grid grid-cols-12 gap-4 pb-4 w-[90%] m-auto mt-20'>
            {products.map((product) => {
                
                const imageUrl = product.images[0].replace(/[\[\]\"]/g, '');

                return (
                    <Link href={"/Products/" + product.id} key={product.id} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 text-center border-2 rounded-lg overflow-hidden hover:scale-105 duration-300 shadow-xl'>
                        <Image
                            src={imageUrl} 
                            alt={product.title}
                            width={500}
                            height={500}
                            className='w-full'
                        />
                        <div className='p-4'>
                            <h2>{product.title}</h2>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
