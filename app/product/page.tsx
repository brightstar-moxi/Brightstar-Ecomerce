"use client";

import Image from "next/image";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";

import {
  Minus,
  Plus,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const productImages = [
  "/product-2.jpg",
  "/product-3.jpg",
  "/product-4.jpg",
];

export default function ProductPage() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-slate-50">
      
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        
        {/* BREADCRUMB */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span>{">"}</span>
          <span>Electronics</span>
          <span>{">"}</span>
          <span>Headphones</span>
          <span>{">"}</span>

          <span className="font-medium text-slate-900">
            Wireless Headphones
          </span>
        </div>

        {/* PRODUCT SECTION */}
        <div className="grid gap-10 rounded-[32px] bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
          
          {/* LEFT */}
          <div>
            
            <div className="flex gap-4">
              
              {/* THUMBNAILS */}
              <div className="flex flex-col gap-4">
                {productImages.map((image) => (
                  <button
                    key={image}
                    onClick={() => setMainImage(image)}
                    className={`overflow-hidden rounded-2xl border-2 ${
                      mainImage === image
                        ? "border-indigo-600"
                        : "border-slate-200"
                    }`}
                  >
                    <Image
                      src={image}
                      alt="Product"
                      width={80}
                      height={80}
                      className="h-20 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* MAIN IMAGE */}
              <div className="relative flex-1 overflow-hidden rounded-3xl bg-slate-100">
                
                <Image
                  src={mainImage}
                  alt="Product"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <Truck className="mx-auto text-indigo-600" />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Free Shipping
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Orders over $50
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <ShieldCheck className="mx-auto text-indigo-600" />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Secure Payment
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  100% secure
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                <RotateCcw className="mx-auto text-indigo-600" />

                <h3 className="mt-4 font-semibold text-slate-900">
                  Easy Returns
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  30 day returns
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
              Premium Sound Quality
            </span>

            <h1 className="mt-5 text-5xl font-bold text-slate-900">
              Wireless Headphones
            </h1>

            {/* RATING */}
            <div className="mt-5 flex items-center gap-3">
              
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <p className="text-sm text-slate-500">
                4.8 (126 reviews)
              </p>
            </div>

            {/* PRICE */}
            <div className="mt-6 flex items-center gap-4">
              
              <h2 className="text-4xl font-bold text-slate-900">
                $89.99
              </h2>

              <span className="text-xl text-slate-400 line-through">
                $120
              </span>

              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-500">
                -25%
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-8 text-slate-600">
              High-quality wireless headphones with advanced noise cancellation
              and superior sound quality for music lovers and professionals.
            </p>

            {/* STOCK */}
            <p className="mt-6 text-sm font-medium text-green-600">
              ✓ In Stock
            </p>

            {/* COLORS */}
            <div className="mt-8">
              
              <h3 className="mb-4 font-semibold text-slate-900">
                Colors
              </h3>

              <div className="flex items-center gap-4">
                
                <button className="h-10 w-10 rounded-full border-4 border-slate-300 bg-black"></button>

                <button className="h-10 w-10 rounded-full bg-slate-500"></button>

                <button className="h-10 w-10 rounded-full bg-indigo-600"></button>
              </div>
            </div>

            {/* CART */}
            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              
              {/* QUANTITY */}
              <div className="flex h-14 items-center rounded-2xl border border-slate-200">
                
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="flex h-full w-14 items-center justify-center"
                >
                  <Minus size={18} />
                </button>

                <span className="flex h-full w-14 items-center justify-center border-x border-slate-200 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="flex h-full w-14 items-center justify-center"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* ADD TO CART */}
              <button className="h-14 flex-1 rounded-2xl bg-indigo-600 px-8 font-semibold text-white transition hover:bg-indigo-700">
                Add To Cart
              </button>
            </div>

            {/* BUY NOW */}
            <button className="mt-5 h-14 w-full rounded-2xl bg-slate-900 font-semibold text-white transition hover:bg-slate-800">
              Buy Now
            </button>
          </div>
        </div>

        {/* DESCRIPTION TABS */}
        <div className="mt-10 rounded-[32px] bg-white p-8 shadow-sm">
          
          <div className="flex flex-wrap gap-8 border-b border-slate-200 pb-5">
            
            <button className="font-semibold text-indigo-600">
              Description
            </button>

            <button className="text-slate-500">
              Specifications
            </button>

            <button className="text-slate-500">
              Reviews (126)
            </button>

            <button className="text-slate-500">
              Shipping & Returns
            </button>
          </div>

          <div className="mt-8">
            <p className="max-w-4xl leading-8 text-slate-600">
              Experience premium sound quality with our advanced wireless headphones.
              Designed for comfort and performance, these headphones feature
              active noise cancellation, crystal-clear audio, and long-lasting battery life.
              Perfect for work, travel, gaming, and entertainment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}