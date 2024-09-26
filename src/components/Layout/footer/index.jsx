import React from 'react'

export default function Footer() {
  return (
    <div>
       <div className="grid lg:grid-cols-2 lg:py-16">
    <div class="w-9/12 py-10 ml-10 pl-5">
      <p>
        Making the world a better place through constructing elegant
        hierarchies.
      </p>
      <div class="text-2xl text-gray-400 my-5">
        <i class="fab fa-github mr-7 hover:text-yellow-600"></i>
        <i class="fab fa-facebook mr-7 hover:text-blue-700"></i>
        <i class="fab fa-instagram mr-7 hover:text-pink-600"></i>
        <i class="fab fa-youtube hover:text-red-600"></i>
      </div>
    </div>
    <div
      class="grid text-md lg:grid-cols-4 md:grid-cols-4 grid-cols-2 leading-10 pl-16"
    >
      <div>
        <ul>
          <li class="font-bold text-lg mb-4">Shop</li>
          <li>Bags</li>
          <li>Tees</li>
          <li>Objects</li>
          <li>Home Goods</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="font-bold text-lg mb-4">Company</li>
          <li>Who We are</li>
          <li>Sustainability</li>
          <li>Press</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="font-bold text-lg mb-4">Account</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="font-bold text-lg mb-4">Connect</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  </div>
    </div>
  )
}
