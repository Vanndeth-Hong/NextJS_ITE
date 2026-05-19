"use client"
import React, { useEffect, useState } from 'react'
import BlogComponent from '../component/BlogComponent';

interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAllBlogs() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
                const data = await res.json();
                setBlogs(data.products);
            } catch (err) {
                console.error("Failed to fetch products", err);
            } finally {
                setLoading(false);
            }
        }
        getAllBlogs();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-24">
                <p className="text-gray-500 text-lg">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-heading mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs?.map((blog) => (
                    <BlogComponent key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
