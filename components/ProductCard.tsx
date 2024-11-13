"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/lib/utils";
import { useState } from "react";


interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCart((state) => state.addItem);



  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">{category}</p>
          <h3 className="font-semibold mt-1">{name}</h3>
          <p className="text-lg font-bold mt-2 text-primary">
            ${price.toLocaleString("es-CL")}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary-600"

          disabled={isAdding}
        >
          {isAdding ? (
            <Check className="h-4 w-4 mr-2" />
          ) : (
            <ShoppingCart className="h-4 w-4 mr-2" />
          )}
          {isAdding ? "Agregado" : "Agregar al Carrito"}
        </Button>
      </CardFooter>
    </Card>
  );
}