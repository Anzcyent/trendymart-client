import React from 'react'
import { Announcement, Footer, Navbar, Newsletter } from '../components'
import { ProductDetails } from '../containers'

const Product = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <ProductDetails />
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default Product