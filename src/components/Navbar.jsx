import { Menu, X, Store, Search } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ products }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = products.filter((product) =>
      product.nombre.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-lg flex items-center justify-center">
              <Store className="w-12 h-12 mr-1" />
              <div className="flex flex-col text-lg ml-2">
                <span className="text-slate-500 text-xl text-center leading-none">
                  The
                </span>
                <span className="font-semibold text-slate-800 text-xl leading-none">
                  JASON
                </span>
                <span className="text-slate-500 text-xl text-center leading-none">
                  Store
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="cursor-pointer text-black hover:text-gray-600 font-bold text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center mx-4">
            <div className="flex items-center space-x-2">
              <div
                className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-300"
                onClick={() => setShowInput(!showInput)}
              >
                <Search className="w-6 h-6" />
              </div>
              {showInput && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="transition-all duration-300 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                  {searchResults.length > 0 ? (
                    <ul className="absolute bg-white border rounded-md mt-2 w-full shadow-lg">
                      {searchResults.map((result, index) => (
                        <li key={index} className="p-2">
                          <Link
                            to={`/product/${result.id}`}
                            className="text-black hover:text-gray-500"
                          >
                            {result.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    searchTerm && (
                      <div className="absolute bg-white border rounded-md mt-2 w-full shadow-lg p-2 text-gray-500">
                        No contamos con ese producto
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Botón de menú móvil */}
          <button
            className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-300 lg:hidden"
            onClick={toggleNavbar}
          >
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileDrawerOpen && (
        <section className="fixed right-0 z-50 w-15 p-12 flex flex-col bg-white lg:hidden space-y-4 py-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="cursor-pointer text-black hover:text-gray-500 font-medium text-xl"
            >
              {item.label}
            </Link>
          ))}
        </section>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Navbar;
