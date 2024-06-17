"use client"
import ProductCard from "@/components/product-card";
import axios from "axios";
import React, {useEffect, useState} from "react";

const Search = () => {

    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    console.log(query)
    const [product, setProduct] = useState(null);
    const [number , setNumber] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            setProduct(response.data.products);
            setNumber(response.data.total)
            console.log(response.data.products)
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {

        fetchData();

    }, []);
    console.log(number)

    return <div className=' '>
        <div className='border flex gap-1 border-black'>
            <h2 className='text-[27px] font-normal'>Результаты поиска </h2>
            <h2 className='font-semibold text-2xl font-sans'>{query}</h2>
            <h2 className='font-semibold  text-2xl font-sans'>{number}</h2>
        </div>
        <div className='flex '>

            <div className='w-3/12  border border-black max-md:hidden '>


            </div>
            <div className='flex flex-col w-9/12 max-md:w-full'>
                <div className='flex gap-3'>
                    <h2>ss</h2> <h2>ss</h2> <h2>ss</h2>
                </div>

                <div className='flex  flex-wrap mt-6 gap-9 justify-center'>
                    {
                        product && Array.isArray(product) && product.map((item: any, i: number) => (
                            <ProductCard item={item} index={i}/>
                        ))
                    }
                </div>

            </div>
        </div>

    </div>
};

export default Search;
