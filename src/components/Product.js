import React, { useEffect } from "react"
import axios from 'axios';
const encodedToken = localStorage.getItem("token");
const Product = () => {
useEffect(()=> {
  const getProductList = async () => {
    try {
      const response = await axios.get(`/api/products`, {
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
      });
      console.log(response.data.products)
      // saving the encodedToken in the localStorage
      
    } catch (error) {
      console.log(error);
    }
  };
  getProductList();
},[])

  return (
<div>Products</div>
  )
}
 export default Product
