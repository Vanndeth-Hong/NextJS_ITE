import { ProductType } from "@/lib/product-v2/product";
import React from "react";
import ProductDetailComponent from "@/components/products/ProductDetailComponent";

async function fetchDetail(uuid: string): Promise<ProductType> {
  const res = await fetch(`https://dummyjson.com/products/${uuid}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data: ProductType = await fetchDetail(uuid);

  return <ProductDetailComponent data={data} />;
}
