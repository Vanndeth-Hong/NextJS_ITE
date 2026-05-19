import Link from "next/link";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    stock: number;
    rating: number;
    brand: string;
    category: string;
    images: string[];
    thumbnail: string;
    discountPercentage: number;
    tags: string[];
}

async function getProduct(id: string): Promise<Product | null> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-4">Product not found</h1>
                <Link href="/blog" className="text-brand underline">← Back to Products</Link>
            </div>
        );
    }

    const discountedPrice = product.price * (1 - product.discountPercentage / 100);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
                <Link href="/blog" className="hover:text-brand transition-colors">Products</Link>
                <span>/</span>
                <span className="text-gray-800 font-medium">{product.title}</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Images */}
                <div className="flex flex-col gap-4">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full rounded-xl object-cover border border-gray-200 shadow-sm"
                    />
                    <div className="grid grid-cols-4 gap-2">
                        {product.images?.slice(0, 4).map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`${product.title} image ${i + 1}`}
                                className="w-full h-20 object-cover rounded-lg border border-gray-200 cursor-pointer hover:border-brand transition-colors"
                            />
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4">
                    {/* Category & Brand */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">{product.category}</span>
                        {product.brand && (
                            <>
                                <span className="text-gray-300">·</span>
                                <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">{product.brand}</span>
                            </>
                        )}
                    </div>

                    <h1 className="text-3xl font-bold text-heading leading-tight">{product.title}</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`w-5 h-5 ${star <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">{product.rating?.toFixed(1)} out of 5</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-end gap-3 mt-2">
                        <span className="text-4xl font-extrabold text-heading">${discountedPrice.toFixed(2)}</span>
                        {product.discountPercentage > 0 && (
                            <>
                                <span className="text-xl text-gray-400 line-through">${product.price.toFixed(2)}</span>
                                <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                    -{product.discountPercentage.toFixed(0)}% OFF
                                </span>
                            </>
                        )}
                    </div>

                    {/* Stock */}
                    <p className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                        {product.stock > 0 ? `✓ In stock (${product.stock} available)` : "✗ Out of stock"}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    {/* Tags */}
                    {product.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 mt-4">
                        <button
                            type="button"
                            className="flex-1 inline-flex items-center justify-center gap-2 text-white bg-brand hover:bg-brand-strong border border-transparent font-semibold rounded-base px-6 py-3 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-medium"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                            </svg>
                            Add to Cart
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 border border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-base px-6 py-3 transition-colors focus:outline-none"
                        >
                            Buy Now
                        </button>
                    </div>

                    <Link href="/blog" className="text-sm text-gray-500 hover:text-brand transition-colors mt-2 inline-block">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
