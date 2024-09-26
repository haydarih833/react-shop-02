import React from 'react'
import Navbar from './Navbar/index'
import Footer from './footer'
export default function Layout({ children, Search, ArrShopCart,setLightAndDark,ligthAndDark }) {
  return (
    <div>
      <Navbar Search={Search} ArrShopCart={ArrShopCart} setLightAndDark={setLightAndDark} ligthAndDark={ligthAndDark} />
      {children}
      <Footer />
    </div>
  )
}
