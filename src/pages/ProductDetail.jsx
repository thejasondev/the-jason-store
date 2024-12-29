import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-5 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <h1 className="text-center text-2xl font-bold mb-4">{product.nombre}</h1>
      <img
        className="w-full h-64 object-center rounded-md mb-4 sm:h-56 md:h-64 lg:h-80"
        src={product.imagen}
        alt={product.nombre}
      />
      <p className="text-center text-gray-600 mb-4">{product.descripcion}</p>
      <div className="text-center mb-4">
        <span className="text-gray-600 font-bold text-xl">
          ${product.precio}
        </span>
      </div>
      <div className="text-center">
        <a
          href={`https://wa.me/5353118193?text=Estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(
            product.nombre
          )}%20por%20${product.precio}USD`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded cursor-pointer p-2 bg-black text-white font-semibold"
        >
          Comprar
        </a>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductDetail;
