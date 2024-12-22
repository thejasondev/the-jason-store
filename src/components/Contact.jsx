import { Phone, MessageCircle } from "lucide-react";
import logo from "../assets/Logos/logo.png";

const ContactSection = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <p className="text-gray-600 mb-6">
          Estamos aquí para ayudarte. Contáctanos a través de WhatsApp o
          llámanos directamente.
        </p>

        {/* Logo */}
        <div className="mt-5 mb-5">
          <img
            src={logo}
            alt="Logo TheJasonSTORE"
            className="mx-auto w-40 h-auto rounded-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/5353118193?text=Hola,%20quisiera%20realizar%20un%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp
          </a>

          {/* Botón de Llamada */}
          <a
            href="tel:+5353118193"
            className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            <Phone className="w-6 h-6 mr-2" />
            Llamar
          </a>
        </div>

        {/* Horario de atención */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
          <p className="text-gray-600">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600">Domingos: 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
