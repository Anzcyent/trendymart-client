import React from 'react'
import { Announcement, Footer, Navbar, Newsletter } from '../components'
import { CartSection } from '../containers'

const Cart = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <CartSection />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart