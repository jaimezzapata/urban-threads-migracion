import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Productos = () => {
  return (
    <>
      <Header />
      <div id="products-page" className="page">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                NUESTRA COLECCIÓN
              </h2>
              <p className="text-xl text-gray-600">
                Estilo urbano para cada ocasión
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Camiseta Básica Urban
                  </h3>
                  <p className="text-gray-600 mb-4">Algodón 100% orgánico</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€29</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Jeans Slim Fit</h3>
                  <p className="text-gray-600 mb-4">Denim premium stretch</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€89</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Sudadera Oversize
                  </h3>
                  <p className="text-gray-600 mb-4">Algodón French Terry</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€65</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Chaqueta Bomber
                  </h3>
                  <p className="text-gray-600 mb-4">Nylon resistente al agua</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€120</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Gorra Snapback</h3>
                  <p className="text-gray-600 mb-4">Bordado premium</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€35</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-card bg-white shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Zapatillas Urban
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Suela de goma antideslizante
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">€95</span>
                    <button className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                      AÑADIR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Productos;
