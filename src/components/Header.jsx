import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function home() {
    navigate("/");
  }
  function products() {
    navigate("/productos");
  }
  function contact() {
    navigate("/contacto");
  }
  return (
    <nav className="urban-gradient text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-wider">URBAN THREADS</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <p

                onClick={home}
                className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer"
              >
                Inicio
              </p>
              <p

                onClick={products}
                className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer"
              >
                Productos
              </p>
              <p

                onClick={contact}
                className="nav-link px-3 py-2 text-sm font-medium hover:text-amber-400 cursor-pointer"
              >
                Contacto
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onclick="toggleMobileMenu()"
              className="text-white hover:text-amber-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
