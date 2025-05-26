"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="space-y-4">
        <Image
          src={images[current]}
          alt="product image"
          width={1000}
          height={1000}
          className="min-h-[300px] object-cover object-center"
        />
        <div className="flex">
          {images.map((image, index) => (
            <div key={image}>
              <Image
                src={image}
                alt="product image"
                width={100}
                height={100}
                className={cn(
                  "border mr-2 cursor-pointer hover:border-orange-600",
                  current === index && "border-2 border-orange-600"
                )}
                onClick={() => setCurrent(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
