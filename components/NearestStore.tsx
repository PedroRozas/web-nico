"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  distance?: number;
}

export default function NearestStore() {
  const [nearestStore, setNearestStore] = useState<Store | null>(null);
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation(position);
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Here you would fetch stores from your API and calculate distances
      // For now, we'll use mock data
      const mockStore: Store = {
        id: 1,
        name: "Teba Central",
        address: "Av. Principal 123, Santiago",
        phone: "+56 9 1234 5678",
        whatsapp: "https://wa.me/+56912345678",
        distance: 2.5
      };
      setNearestStore(mockStore);
    }
  }, [userLocation]);

  if (!nearestStore) return null;

  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Local más cercano
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-semibold">{nearestStore.name}</p>
            <p>{nearestStore.address}</p>
            <p>A {nearestStore.distance} km de tu ubicación</p>
            <a
              href={nearestStore.whatsapp}
              className="text-blue-600 hover:text-blue-800 block"
            >
              {nearestStore.phone}
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}