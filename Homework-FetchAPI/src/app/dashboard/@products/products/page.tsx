"use client";
import ProductCardComponent from "@/components/products/ProductCardComponent";
import { ProductType } from "@/lib/product-v2/product";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductPageRoute() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">All Products</h2>
        <div className="flex gap-3">
          <Link
            href="/dashboard/create"
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            + Create Product
          </Link>
          <Link
            href="/dashboard/edit"
            className="text-sm font-medium text-slate-600 border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors"
          >
            Edit Product
          </Link>
        </div>
      </div>

      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductRenderingProcess />
      </Suspense>
    </div>
  );
}

export function LoadingSuspenseComponent() {
  return (
    <div className="relative flex justify-center items-center h-64">
      <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
}

function ProductRenderingProcess() {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("/api/product", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (isLoading) return <LoadingSuspenseComponent />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-48 gap-2 text-slate-500">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-sm font-medium text-red-500">Failed to load products. Please try again.</p>
      </div>
    );
  }

  // DummyJSON returns { products: [...], total, skip, limit }
  const productList: ProductType[] = products?.data?.products ?? [];

  return (
    <div>
      {productList.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-12">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {productList.map((product: ProductType) => (
            <Link
              key={product.id}
              href={`/dashboard/products/${product.id}`}
              className="block"
            >
              <ProductCardComponent
                description={product.description}
                id={product.id}
                thumbnail={product.thumbnail}
                title={product.title}
                price={product.price}
                rating={product.rating}
                category={product.category}
                brand={product.brand}
                stock={product.stock}
              />
            </Link>
          ))}
        </div>
      )}
      <p className="text-xs text-slate-400 mt-4 text-right">
        Showing {productList.length} products
      </p>
    </div>
  );
}
