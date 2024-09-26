import React from 'react'
import Header from './Header'
import Category from './Category'
import BG_layer_2 from './bg-layer-2'
import Favorite from './favorite'
import Discount from './discount'

export default function Homepage() {
  return (
    <div>
    <Header/>
    <div class="mx-5 sm:mx-6 md:mx-8">
    <Category/>
    <BG_layer_2/>
    <Favorite/>
    <Discount/>
    </div>
    </div>
  )
}
