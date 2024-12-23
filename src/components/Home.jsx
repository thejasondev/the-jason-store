import { Link } from "react-router-dom";
import logo from "../assets/Logos/logo.png";

const Inicio = () => {
  return (
    <section className="flex flex-row items-center relative ml-20 mt-10 lg:mt-0 mb-10">
      <div className="w-1/2">
        <h1 className="text-xl lg:text-4xl font-bold mb-4">
          Bienvenido a Nuestra Tienda
        </h1>
        <p className="text-base lg:text-xl text-gray-600 mb-5">
          Nuestra tienda es un lugar donde encontrarás las mejores ofertas en
          tecnología, ropa, comida y mucho más. Ofrecemos productos de alta
          calidad con descuentos exclusivos.
        </p>
        <h3 className="text-base lg:text-xl text-gray-600 mb-5">
          Somos un TODO en UNO!.
        </h3>

        <Link
          to="/discounts"
          className="rounded cursor-pointer p-2 mx-10 bg-black text-white font-semibold"
        >
          Descuentos
        </Link>
      </div>

      <div className="w-1/2">
        <img
          src={logo}
          alt="Logo TheJasonSTORE"
          className="w-50 h-auto object-cover rounded-full hover:shadow-lg"
        />
      </div>
    </section>
  );
};

export default Inicio;
