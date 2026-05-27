import React from 'react'
import { products } from '@/app/lib/products/products-data'

export default function ProductCartComponent() {
  return (
    <div className="m-10">
      <div className="mb-6 px-4">
        <h2 className="text-lg font-semibold text-heading">Cart products</h2>
        <p className="text-sm text-body">Products from the shared data list are displayed here.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl" href="#">
              <img
                className="object-cover w-full"
                src="/BEST-MACBOOKS-5175.webp"
                alt={product.name}
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {product.category}
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
              </a>
              <p className="mt-1 text-sm text-body caret-blue-600">Color: {product.color}</p>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p className="text-3xl font-bold text-slate-900">${product.price}</p>
                <span className="rounded bg-yellow-200 px-2 py-1 text-xs font-semibold text-slate-900">In stock</span>
              </div>
              <a
                href="#"
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                View product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}