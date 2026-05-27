"use client";

import Image from "next/image";
import { ProductType } from "@/lib/product-v2/product";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ProductDetailModalComponent({
  thumbnail,
  price,
  title,
  description,
  id,
  category,
  rating,
  stock,
  brand,
}: ProductType) {
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter();

  function onCloseModal() {
    setOpenModal(false);
    router.back();
  }

  if (!openModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onCloseModal}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onCloseModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
            <div className="relative h-[320px] w-full">
              <Image src={thumbnail} alt={title} fill className="object-cover" />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category + Price */}
              <div className="flex items-center justify-between">
                {category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    {category}
                  </span>
                )}
                <p className="text-2xl font-bold text-blue-600">${price}</p>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

              {/* Rating */}
              {rating && (
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.round(rating) ? "text-yellow-400" : "text-slate-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">{rating} / 5</span>
                </div>
              )}

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>

              {/* Meta info */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                {brand && (
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-400 text-xs mb-0.5">Brand</p>
                    <p className="font-medium text-slate-700">{brand}</p>
                  </div>
                )}
                {stock !== undefined && (
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-slate-400 text-xs mb-0.5">In Stock</p>
                    <p className={`font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
                      {stock > 0 ? `${stock} units` : "Out of stock"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors">
                Add to Cart
              </button>
              <button
                onClick={onCloseModal}
                className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
