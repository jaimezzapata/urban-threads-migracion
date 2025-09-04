import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Header />
      <div id="home-page" class="page">
        <section class="urban-gradient text-white py-20 lg:py-32">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="hero-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              ESTILO URBANO
              <span class="block text-amber-400">REDEFINIDO</span>
            </h2>
            <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Descubre nuestra colección exclusiva de ropa urbana minimalista
            </p>
            <button
              onclick="showPage('products')"
              class="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105"
            >
              EXPLORAR COLECCIÓN
            </button>
          </div>
        </section>

        <section class="py-20 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.828 2.828A4 4 0 019.172 21H7l-2-2h5.172a4 4 0 002.828-2.828L21 3z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4">DISEÑO ÚNICO</h3>
                <p class="text-gray-600">
                  Piezas exclusivas con estética urbana y minimalista
                </p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4">CALIDAD PREMIUM</h3>
                <p class="text-gray-600">
                  Materiales de alta calidad para máxima durabilidad
                </p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-4">ENVÍO RÁPIDO</h3>
                <p class="text-gray-600">Entrega express en 24-48 horas</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
