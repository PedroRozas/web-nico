"use client";

import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart, type CartItem } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity } = useCart();
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Carrito de Compras
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Tu carrito está vacío</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toLocaleString("es-CL")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item, item.quantity - 1)
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <SheetFooter className="mt-auto">
          <div className="w-full space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${total.toLocaleString("es-CL")}</span>
            </div>
            <Button className="w-full" disabled={items.length === 0}>
              Proceder al Pago
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}