import React from 'react'
import './index.css'
import image from '../../img/home-page-03-hero-image-tile-01.jpg'
import image2 from '../../img/home-page-03-hero-image-tile-02.jpg'
import image3 from '../../img/home-page-03-hero-image-tile-03.jpg'
import image4 from '../../img/home-page-03-hero-image-tile-04.jpg'
import image5 from '../../img/home-page-03-hero-image-tile-05.jpg'
import image6 from '../../img/home-page-03-hero-image-tile-06.jpg'
import image7 from '../../img/home-page-03-hero-image-tile-07.jpg'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <div class="md:flex justify-between items-center" >
        <div class="lg:w-6/12 md:w-10/12 md:pl-10 pl-5 nonePosition md:absolut " >
          <h2 class="md:w-10/12 font-bold md:text-6xl text-4xl pb-4">
            Summer styles are finally here
          </h2>
          <p class="w-10/12 text-xl">
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
          <Link to={'/products/AllProduct'}>
            <button
              class="text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg my-7"
            >
              Shop Collection
            </button>
          </Link>
        </div>
        <div
          class="overflow-hidden lg:w-6/12 xl:w-5/12 w-full md:flex lg:block justify-end h-72 md:h-full"
        >
          <div
            className="grid lg:grid-cols-3 grid-cols-2 gap-2 left-14 bottom-14"
            style={{height:'625px'}}
          >
            <div
              class="mr-5 lg:pt-24 flex lg:block md:items-end md:pb-20 pt-32 w-full"
            >
              <img
                src={image}
                class="h-64 w-44 rounded-3xl mb-5 hidden lg:block"
                alt=""
              />
              <img
                src={image2}
                class="h-64 w-44 rounded-3xl"
                alt=""
              />
            </div>
            <div class="w-full">
              <img
                src={image3}
                class="h-64 w-44 rounded-3xl mb-5"
                alt=""
              />
              <img
                src={image4}
                class="h-64 w-44 rounded-3xl mb-5"
                alt=""
              />
              <img
                src={image5}
                class="h-64 w-44 rounded-3xl"
                alt=""
              />
            </div>
            <div class="pt-24 hidden lg:block">
              <img
                src={image7}
                class="h-64 w-44 rounded-3xl mb-5"
                alt=""
              />
              <img
                src={image6}
                class="h-64 w-44 rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
