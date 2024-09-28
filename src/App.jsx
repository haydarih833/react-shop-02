import React, { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Homepage from './components/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/Productlist'
import ProductOverView from './components/ProductOverView'
import ShopCart from './components/ShopCart'
import Sign from './components/signIn'
import data from './components/data/Products'
import DataContext from './components/Context/data'
import SearchBox from './components/SearchBox'
export default function App() {
  const [hasActiveSearch, setHasActiveSerarch] = useState(false)
  const [ArrShopCart, setShopCart] = useState([])
  const [ligthAndDark, setLightAndDark] = useState(true)
  return (
    <div className={`${ligthAndDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <DataContext.Provider value={{ data }}>
        <BrowserRouter>
          {hasActiveSearch && <SearchBox Search={setHasActiveSerarch} />}
          <div className={`${hasActiveSearch ? 'bg-gray-300 blur' : ''}`} onClick={hasActiveSearch ? () => { setHasActiveSerarch(false) } : () => { }}>
            <Layout Search={setHasActiveSerarch} ArrShopCart={ArrShopCart.length} setLightAndDark={setLightAndDark} ligthAndDark={ligthAndDark}>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/products/:id' element={<ProductList ligthAndDark={ligthAndDark}/>} />
                <Route path='/product/:id' element={<ProductOverView setShopCart={setShopCart} ArrShopCart={ArrShopCart} />} />
                <Route path='/shopcart' element={<ShopCart ArrShopCart={ArrShopCart} setShopCart={setShopCart} />} />
                <Route path='/sign' element={<Sign />} />
              </Routes>
            </Layout>

          </div>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  )
}
