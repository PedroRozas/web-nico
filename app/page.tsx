import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import WeeklyOffers from '@/components/WeeklyOffers';
import NearestStore from '@/components/NearestStore';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/hero-banner.jpg"
            alt="Ofertas especiales"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8">
              <h1 className="text-4xl font-bold mb-4">
                Ofertas Especiales
                <br />
                Fiestas Patrias
              </h1>
              <p className="text-xl mb-6">
                Descubre nuestras increíbles ofertas
              </p>
              <Button size="lg" variant="default">
                Ver Ofertas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Offers */}
      <WeeklyOffers />

      {/* Nearest Store */}
      <NearestStore />

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            name="Papel Higiénico Elite"
            id={1}
            price={4990}
            image="/products/papel-elite.jpg"
            category="Limpieza"
          />
        </div>
      </section>

      {/* Club Teba */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Club Teba</CardTitle>
            <CardDescription>
              Únete a nuestro club de beneficios y obtén descuentos exclusivos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Como miembro del Club Teba, tendrás acceso a:</p>
              <ul className="list-disc list-inside">
                <li>Descuentos exclusivos</li>
                <li>Ofertas anticipadas</li>
                <li>Eventos especiales</li>
                <li>Y mucho más...</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Únete Ahora</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
