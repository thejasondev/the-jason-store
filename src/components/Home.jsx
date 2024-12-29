import { Link } from "react-router-dom";
import logo from "../assets/Logos/logo.png";

const Home = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Bienvenido</h1>
        <p className="text-gray-600 mb-6">
          Nuestra tienda es un lugar donde encontrarás las mejores ofertas en
          tecnología, ropa, comida y mucho más. Ofrecemos productos de alta
          calidad con descuentos exclusivos.
        </p>
        <h3 className="text-gray-600 mb-6">Somos un TODO en UNO!.</h3>
        <div className="mt-5 mb-5">
          <img
            src={logo}
            alt="Logo TheJasonSTORE"
            className="mx-auto w-40 h-auto rounded-full"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <Link
            to="/discounts"
            className="flex items-center justify-center px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg cursor-pointer bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Descuentos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
