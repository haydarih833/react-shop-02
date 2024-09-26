import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Card(props) {
  const navigate = useNavigate()
  return (
    <div className={`${props.Style ? 'bg-white p-4 rounded-2xl':''}`}>
      <div className="group" onClick={() => { navigate(`/product/${props.id}`) }}>
        <div
          className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={props?.images[0]}
            alt="props.imageAlt"
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm    -700">
              <a href="props.href">
                {props.name}

              </a>
            </h3>
            <p class="mt-1 text-sm    -500">
              {props.title}

            </p>
          </div>
          <p class="text-sm font-medium    -900">$
            {props.price}
          </p>
        </div>
      </div>

    </div>
  )
}
