"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

export default function WeeklyOffers() {
  const [offers, setOffers] = useState({
    weekly: [],
    biweekly: []
  });

  useEffect(() => {
    // Here you would fetch the offers from your API
    // For now, we'll use mock data
    setOffers({
      weekly: [
        {
          id: 1,
          name: "Producto Oferta 1",
          price: 1990,
          image: "/products/offer1.jpg",
          category: "Abarrotes"
        },
        // Add more weekly offers
      ],
      biweekly: [
        {
          id: 2,
          name: "Producto Oferta 2",
          price: 2990,
          image: "/products/offer2.jpg",
          category: "Limpieza"
        },
        // Add more biweekly offers
      ]
    });
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Ofertas</h2>
      <Tabs defaultValue="weekly">
        <TabsList>
          <TabsTrigger value="weekly">Ofertas Semanales</TabsTrigger>
          <TabsTrigger value="biweekly">Ofertas Quincenales</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offers.weekly.map((product: any) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="biweekly">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offers.biweekly.map((product: any) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}