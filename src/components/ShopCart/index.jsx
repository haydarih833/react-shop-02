import React, { useRef, useState } from 'react'

export default function ShopCart({ ArrShopCart, setShopCart }) {
  const [delet, setDelete] = useState(ArrShopCart)
  let Subtoal = 0
  ArrShopCart.map(item => {
    Subtoal += item.price
  })
  const handleDelete = (color, size, id) => {
    let find = ArrShopCart.find(item => item.id === id && item.color === color && item.size === size)
    setDelete(ArrShopCart.filter(item => item !== find))
  }
  setShopCart(delet)
  return (
    <div>
      {delet.length === 0 ?
        <div className='text-center my-36'><p className='animate-pulse text-4xl font-bold '>Cart is Empty</p></div>
        :
        <div class="m-5 sm:m-6 md:m-8">
          <div><p class="text-4xl font-bold pb-5">Shopping Cart</p></div>
          <div class="md:flex w-full justify-between">
            <div class="md:w-11/12 overflow-y-scroll h-96" id="scroll">
              {
                delet.map(item => {
                  return <div class="flex border-t-2 p-5 md:w-9/12">
                    <img
                      src={item.image}
                      class="w-48 h-48 p-3"
                      alt=""
                    />
                    <div class="w-full flex justify-between">
                      <div>
                        <p class="font-semibold">{item.title}</p>
                        <p class="text-gray-400"> {item.size} | {item.color}</p>
                        <p class="font-semibold">${item.price}</p>
                      </div>
                      <div>
                        <select class="border px-2 rounded-xl" >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      <div onClick={() => handleDelete(item.color, item.size, item.id)}
                      ><i class="fa fa-remove text-gray-400"></i></div>
                    </div>
                  </div>
                })
              }


            </div>
            <div class="md:w-4/12 p-5 mt-10">
              <p class="font-bold text-lg">Order Summary</p>
              <div class="flex w-full justify-between border-b-2 py-3">
                <p>Subtoal</p>
                <p>${Subtoal}</p>
              </div>
              <div class="flex w-full justify-between border-b-2 py-3">
                <p>Shipping estimate</p>
                <p>$5.00</p>
              </div>
              <div class="flex w-full justify-between border-b-2 py-3">
                <p>Tax estimate</p>
                <p>$8.32</p>
              </div>
              <div class="flex w-full justify-between py-3">
                <p class="font-semibold text-lg">Order total</p>
                <p class="font-semibold">${Subtoal + 5 + 8.32}</p>
              </div>
              <div class="text-center">
                <button

                  class="bg-blue-600 text-white rounded-lg lg:px-32 px-16 py-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      }

    </div>


  )
}
