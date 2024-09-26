import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export default function Category() {
  const navigate=useNavigate()
  const handleCategory=(props)=>{
navigate(`/products/${props}`)
  }
  return (
    <div>
    <div class="font-bold md:text-2xl text-xl my-6 ml-2 ">
      <p>Shop By Category</p>
    </div>
    <div class="cotainer md:flex justify-between text-white mb-16">
      <div class="md:w-6/12 md:mr-4 mb-5 rounded-2xl bg-cover" onClick={()=>handleCategory('Clothes')}>
        <div
          class="w-full md:h-full h-40 rounded-2xl hover:opacity-90 bg-cover"
          id="image"
        >
          <div class="relative md:top-3/4 top-2/3 left-4">
            <p class="font-semibold text-lg lg:pt-10">New Arrivals</p>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 md:ml-4">
        <div
          class="w-full lg:h-72 h-40 bg-cover bg-center rounded-2xl hover:opacity-90 "
          id="image-1"
          onClick={()=>handleCategory('Shoes')}
        >
          <div class="relative lg:top-3/4 top-2/3 left-4" >
            <p class="font-semibold text-lg">Accessories</p>
            <p>Shop Now</p>
          </div>
        </div>
        <div
          class="w-full lg:h-72 h-40 mt-4 bg-cover bg-center rounded-2xl hover:opacity-90"
          id="image-2"
          onClick={()=>handleCategory('Clothes')}
        >
          <div class="relative lg:top-3/4 top-2/3 left-4">
            <p class="font-semibold text-lg">WorkSpace</p>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
