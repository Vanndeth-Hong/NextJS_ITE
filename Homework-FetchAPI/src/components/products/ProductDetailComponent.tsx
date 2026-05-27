import { ProductType } from "@/lib/product-v2/product";
import React from "react";

export default function ProductDetailComponent({
  data,
}: {
  data: ProductType;
}) {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Product Detail</h1>
          {data?.category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              {data.category}
            </span>
          )}
        </div>
        <div className="grid gap-6 rounded-2xl bg-white p-6 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              className="h-[300px] w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{data?.title}</h2>
              {data?.brand && (
                <p className="text-sm text-slate-400 mt-1">by {data.brand}</p>
              )}
              <p className="mt-3 text-gray-600">{data?.description}</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-2xl font-bold text-green-600">${data?.price}</p>
            </div>
            {data?.stock !== undefined && (
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Stock</p>
                <p className={`text-lg font-semibold ${data.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                  {data.stock > 0 ? `${data.stock} units available` : "Out of stock"}
                </p>
              </div>
            )}
            <div className="flex gap-3">
              <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Edit Product
              </button>
              <button className="w-full rounded-lg border px-4 py-2 hover:bg-gray-100">
                Back
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">Product Information</h3>
          <div className="grid gap-4 text-sm text-gray-600 md:grid-cols-2">
            <div>
              <p className="text-gray-400">ID</p>
              <p>{data?.id}</p>
            </div>
            <div>
              <p className="text-gray-400">Name</p>
              <p>{data?.title}</p>
            </div>
            <div>
              <p className="text-gray-400">Price</p>
              <p>${data?.price}</p>
            </div>
            {data?.rating && (
              <div>
                <p className="text-gray-400">Rating</p>
                <p>{data.rating} / 5</p>
              </div>
            )}
            <div>
              <p className="text-gray-400">Status</p>
              <p className={data?.stock && data.stock > 0 ? "text-green-600" : "text-red-500"}>
                {data?.stock && data.stock > 0 ? "Active" : "Out of Stock"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
