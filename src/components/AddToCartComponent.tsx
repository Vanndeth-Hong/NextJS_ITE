"use client"
import  { useState } from "react";

export default function AddToCartComponent() {
    // creating state
    // state, functionUpdateState = useState(initialValue)
    const [cartCount, setCartCount] = useState(0);
  return (
    <>
        <h1>Cart: {cartCount}</h1>
        <button 
            className="text-white bg-brand hover:bg-fg-brand focus:ring-4 focus:outline-none focus:ring-fg-brand font-medium rounded-base text-sm px-5 py-2.5 text-center inline-flex items-center"
            onClick={() => setCartCount(cartCount + 1)}
        >
            
            Add To Cart
        </button>
    </>
  )
}