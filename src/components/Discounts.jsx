import { TrendingDown } from "lucide-react";
import { ProductosDescuentos } from "../constants";

const Descuentos = () => {
  return (
    <section className="relative mt-1 border-b">
      <div className="text-center mt-5 mb-5">
        <a className="text-lg flex items-center justify-center">
          <TrendingDown className="w-12 h-10 mr-1" />
          <div className="flex flex-col text-lg ml-2">
            <span
              className="text-slate-500 text-xl 
            text-center leading-none font-bold"
            >
              DESCUENTOS
            </span>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {ProductosDescuentos.map((producto, index) => (
          <div
            key={index}
            className="relative border p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-64 object-contain rounded-lg mb-4 md:h-12 lg:h-80"
            />
            <h3 className="text-lg font-bold">{producto.nombre}</h3>
            <p className="text-gray-600 mb-4">{producto.descripcion}</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-600 font-bold text-xl">
                ${producto.precio}
              </span>
              <a
                href={`https://wa.me/5353118193?text=Estoy%20interesado%20en%20el%20producto%20en%20descuento%20${encodeURIComponent(
                  producto.nombre
                )}%20por%20${producto.precio}USD`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded cursor-pointer p-2 mx-10 bg-black text-white font-semibold"
              >
                Comprar
              </a>
              <span className="text-gray-500 line-through justify-center items-center">
                ${producto.precioOriginal}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Descuentos;
