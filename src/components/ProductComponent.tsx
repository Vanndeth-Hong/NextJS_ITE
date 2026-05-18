
// product component
"use client";

import { useState } from "react";
import { products } from "@/app/lib/products/products-data";

export default function ProductComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const displayedProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (selectedFilter === "color") return a.color.localeCompare(b.color);
      if (selectedFilter === "category") return a.category.localeCompare(b.category);
      if (selectedFilter === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div className="relative bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <div className="p-4 flex items-center justify-between space-x-4">
        <label htmlFor="input-group-1" className="sr-only">Search</label>
        
        <div className="relative flex-1 max-w-96">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="text" 
            id="input-group-1" 
            className="block w-full ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative">
          <button 
            id="dropdownDefaultButton" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="shrink-0 inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none" 
            type="button"
          >
            <svg className="w-4 h-4 me-1.5 -ms-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
            </svg>
            Filter by
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>
          </button>

          <div 
            id="dropdown" 
            className={`z-10 ${isDropdownOpen ? "block" : "hidden"} absolute right-0 mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32`}
          >
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFilter("all"); }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">All</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFilter("color"); }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Color</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFilter("category"); }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Category</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setSelectedFilter("price"); }} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Price</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="flex flex-col overflow-hidden rounded-xl border border-default-medium bg-white shadow-sm">
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={`https://arystorephone.com/wp-content/uploads/2022/10/Apple-iPad-2022-blue.jpg?v=1742279396=${product.id}`}
                alt={product.name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-3 left-3 rounded-full bg-black/80 px-2 py-1 text-xs font-semibold text-white">
                {product.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-base font-semibold text-heading">{product.name}</h3>
              <p className="mt-2 text-sm text-body">Color: {product.color}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">${product.price}</span>
                <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">In stock</span>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center rounded-base bg-brand px-3 py-2 text-sm font-medium text-white hover:bg-brand-darker"
              >
                View product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
