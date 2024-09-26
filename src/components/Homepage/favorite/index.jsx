import { useNavigate } from "react-router-dom"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const Products = [
  {
    "category": {
      "id": 1,
      "name": "Clothes"
    },
    "_id": "659e8a485f3b1887ef3212e0",
    "id": 8,
    "title": "Incredible Steel Mouse",
    "price": 356,
    "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    "images": [
      "https://iili.io/dR9YBln.jpg",
      "https://iili.io/dR9YoHG.jpg",
      "https://iili.io/dR9YCSs.jpg"
    ],
    "color": ["Black", "Gray", "White"],
    "gender": "Female",
    "size": ["M", "L", "XL"]
  },
  {
    "category": {
      "id": 1,
      "name": "Clothes"
    },
    "_id": "659e8a485f3b1887ef3212de",
    "id": 6,
    "title": "Handcrafted Rubber Shirt",
    "price": 488,
    "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    "images": [
      "https://iili.io/dR1EZR1.jpg",
      "https://iili.io/dR1GHfR.jpg",
      "https://iili.io/dR1GdUN.jpg"
    ],
    "color": ["Gray", "Black", "Red"],
    "gender": "Female",
    "size": ["M", "L", "XL"]
  },
  {
    "category": {
      "id": 1,
      "name": "Clothes"
    },
    "_id": "659e8a485f3b1887ef3212df",
    "id": 7,
    "title": "Awesome Fresh Pizza",
    "price": 890,
    "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    "images": [
      "https://iili.io/dR1G3JI.jpg",
      "https://iili.io/dR1GKOX.jpg"
    ],
    "color": ["Blue", "White", "Black"],
    "gender": "Male",
    "size": ["S", "M", "L"]
  }
]
export default function Favorite() {
  const navigate = useNavigate()
  return (
    <div >
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <h2 class="text-2xl font-bold tracking-tight ">
          Our Favorites
        </h2>
        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8"
        >
          {Products.map(items => {
            return <div class="group relative" onClick={() => { navigate(`/product/${items.id}`) }}>

              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-full"
              >
                <img
                  src={items?.images[1]}
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm   ">
                    <a>
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {items.title}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm   ">{items.color[1]}</p>
                </div>
                <p class="text-sm font-medium   ">
                  {items.price}
                </p>
              </div>
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}
