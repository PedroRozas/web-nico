"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/utils";
import CartDrawer from "./CartDrawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const categories = [
  { name: "ABARROTES", href: "/categorias/abarrotes" },
  { name: "INDUSTRIALES", href: "/categorias/industriales" },
  { name: "COMIDA MASCOTA", href: "/categorias/mascotas" },
  { name: "CUIDADO PERSONAL", href: "/categorias/cuidado-personal" },
  { name: "LÁCTEOS", href: "/categorias/lacteos" },
  { name: "LIMPIEZA HOGAR", href: "/categorias/limpieza" },
  { name: "INDUSTRIAL", href: "/categorias/industrial" },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useCart((state) => state.items);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Teba Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block flex-1 px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 text-gray-800"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-primary-100">
              <User className="h-5 w-5 mr-2" />
              Mi Cuenta
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-primary-100 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <NavigationMenu className="hidden md:flex justify-center py-2">
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <Link href={category.href} legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium text-white hover:text-primary-100">
                    {category.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}