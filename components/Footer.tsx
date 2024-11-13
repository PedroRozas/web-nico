"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Acerca de Teba
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/nosotros" className="text-base text-gray-500 hover:text-gray-900 block">
                Quiénes Somos
              </Link>
              <Link href="/trabaja-con-nosotros" className="text-base text-gray-500 hover:text-gray-900 block">
                Trabaja con Nosotros
              </Link>
              <Link href="/locales" className="text-base text-gray-500 hover:text-gray-900 block">
                Nuestros Locales
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Servicio al Cliente
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/contacto" className="text-base text-gray-500 hover:text-gray-900 block">
                Contacto
              </Link>
              <Link href="/preguntas-frecuentes" className="text-base text-gray-500 hover:text-gray-900 block">
                Preguntas Frecuentes
              </Link>
              <Link href="/terminos" className="text-base text-gray-500 hover:text-gray-900 block">
                Términos y Condiciones
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Club Teba
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/club/beneficios" className="text-base text-gray-500 hover:text-gray-900 block">
                Beneficios
              </Link>
              <Link href="/club/registro" className="text-base text-gray-500 hover:text-gray-900 block">
                Regístrate
              </Link>
              <Link href="/club/ofertas" className="text-base text-gray-500 hover:text-gray-900 block">
                Ofertas Exclusivas
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Síguenos
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Comercial Teba. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}