import React from 'react'
import './style.css'
import image from '../../img/home-page-03-category-01.jpg'
import image1 from '../../img/home-page-03-category-02.jpg'
import image2 from '../../img/home-page-03-favorite-01.jpg'
import image3 from '../../img/home-page-03-favorite-02.jpg'
export default function Discount() {
  return (
    <div>
        <div
    class="bg-gray-900 md:flex text-white justify-between items-center mt-20
     "
  >
    <div class="relative top-60 md:top-0 pl-7">
      <h2 class="md:text-5xl text-4xl w-10/12 font-bold pb-5">
        Final Stock. Up to 50% off
      </h2>
      <button>Shop the sale <i class="fa fa-long-arrow-right"></i></button>
    </div>
    <div>
      <div class="flex lg:gap-5" id="custom-height">
        <div class="md:pt-5 relative bottom-60 md:bottom-0 overflow-hidden w-full lg:w-1/2">
          <img
            src={image}
            class="h-72 w-full rounded-3xl mb-5"
            alt=""
          />
          <img
            src={image1}
            class="h-72 w-72 rounded-3xl  mb-5 hidden md:block"
            alt=""
          />
        </div>
        <div class="relative md:bottom-20 bottom-64">
          <div class="overflow-hidden">
            <div class="relative left-1/3 lg:left-0 w-full">
              <img
                src={image2}
                class="h-72 w-72 rounded-3xl mb-5"
                alt=""
              />
              <div class="overflow-hidden w-full h-48 relative top-2">
                <img
                  src={image3}
                  class="h-72 w-72 rounded-3xl mb-5 hidden md:block "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
