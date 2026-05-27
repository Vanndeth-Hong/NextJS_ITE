import Link from "next/link";
import React from "react";

export default function ProductPage() {
  return (
    <div className="flex gap-5">
      <Link href={"/dashboard/create"}>Create Product</Link>
      <Link href={"/dashboard/edit"}>Edit Product</Link>
    </div>
  );
}
