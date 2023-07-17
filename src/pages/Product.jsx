import React, { useEffect, useState } from 'react'
import { Announcement, Footer, Navbar, Newsletter } from '../components'
import { ProductDetails } from '../containers'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../utils/requests'

const Product = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/"+id);
        setProduct(res.data.product);
      } catch (err) {
        
      }
    }

    getProduct();
  }, [id])

  
  return (
    <div>
        <Navbar />
        <Announcement />
        <ProductDetails product={product} />
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default Product