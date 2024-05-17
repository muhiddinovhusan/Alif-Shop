"use client"

import axios from "axios";
import { useEffect, useState } from "react";


const ProductDetails = ({ params : {productId}}) => {

  
  const [product, setProduct] = useState(null);

  const fetchData = async () => {
    try {
      console.log('Fetching product data for ID:', productId); 
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      console.log('Product data received:', response.data);
      setProduct(response.data); 
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);


  return <div>ProductDetails</div>;
};

export default ProductDetails;
