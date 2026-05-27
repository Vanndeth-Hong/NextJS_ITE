import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  py-10">
      <div className="w-full container mx-auto px-4">
        <h1 className="text-4xl font-light text-center py-5">All Products</h1>
        <Link href={"/dashboard"}>Go to dashbaord</Link>
      </div>
    </div>
  );
}
