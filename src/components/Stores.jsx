import { tiendas } from "../constants";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Tiendas = () => {
  return (
    <section className="relative mt-1 border-b">
      <div className="text-center mt-5 mb-5">
        <a className="text-lg flex items-center justify-center">
          <ShoppingCart className="w-12 h-12 mr-1" />
          <div className="flex flex-col text-lg ml-2">
            <span className="text-slate-500 text-xl text-center leading-none font-bold">
              TIENDAS
            </span>
          </div>
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        {tiendas.map((tiendas) => (
          <div key={tiendas.id} className="w-full sm:w-auto lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral font-thin">
              <Link to={`/store/${tiendas.id}`}>
                <div className="flex mt-2 items-start pb-6 cursor-pointer">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={tiendas.logo}
                    alt={`${tiendas.nombre} logo`}
                  />
                  <div>
                    <h6 className="font-bold">{tiendas.nombre}</h6>
                    <span className="text-sm font-semibold italic text-neutral-500">
                      {tiendas.tipo}
                    </span>
                  </div>
                </div>
              </Link>
              <p className="font-light">{tiendas.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiendas;
