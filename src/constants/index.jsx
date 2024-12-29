import user1 from "/src/assets/Logos/fabios.webp";
import user2 from "/src/assets/Logos/tutto.webp";
import user3 from "/src/assets/Logos/skala.webp";

import iphone1 from "/src/assets/Poductos/FabioProductos/iphone1.jpeg";
import iphone2 from "/src/assets/Productos/FabioProductos/iphone2.jpeg";
import iphone3 from "/src/assets/Productos/FabioProductos/iphone3.jpeg";
import iphone4 from "/src/assets/Productos/FabioProductos/iphone4.jpeg";
import iphone5 from "/src/assets/Productos/FabioProductos/iphone5.jpeg";
import iphone6 from "/src/assets/Productos/FabioProductos/iphone6.jpeg";
import iphone7 from "/src/assets/Productos/FabioProductos/iphone7.jpeg";
import iphone8 from "/src/assets/Productos/FabioProductos/iphone8.jpeg";
import iphone9 from "/src/assets/Productos/FabioProductos/iphone9.jpeg";

import perfume1 from "/src/assets/Productos/FraganzaProductos/perfume1.jpg";
import perfume2 from "/src/assets/Productos/FraganzaProductos/perfume2.jpg";
import perfume3 from "/src/assets/Productos/FraganzaProductos/perfume3.jpg";
import perfume4 from "/src/assets/Productos/FraganzaProductos/perfume4.jpg";
import perfume5 from "/src/assets/Productos/FraganzaProductos/perfume5.jpg";
import perfume6 from "/src/assets/Productos/FraganzaProductos/perfume6.jpg";
import perfume7 from "/src/assets/Productos/FraganzaProductos/perfume7.jpg";
import perfume8 from "/src/assets/Productos/FraganzaProductos/perfume8.jpg";

import camiseta1 from "/src/assets/Productos/SkalaProductos/camiseta1.jpg";
import camiseta2 from "/src/assets/Productos/SkalaProductos/camiseta2.jpg";
import camiseta3 from "/src/assets/Productos/SkalaProductos/camiseta3.jpg";
import camiseta4 from "/src/assets/Productos/SkalaProductos/camiseta4.jpg";
import camiseta5 from "/src/assets/Productos/SkalaProductos/camiseta5.jpg";
import camiseta6 from "/src/assets/Productos/SkalaProductos/camiseta6.jpg";
import camiseta7 from "/src/assets/Productos/SkalaProductos/camiseta7.jpg";
import camiseta8 from "/src/assets/Productos/SkalaProductos/camiseta8.jpg";
import camiseta9 from "/src/assets/Productos/SkalaProductos/camiseta9.jpg";
import camiseta10 from "/src/assets/Productos/SkalaProductos/camiseta10.jpg";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Tiendas", to: "/stores" },
  { label: "Descuentos", to: "/discounts" },
  { label: "Contacto", to: "/contact" },
];

export const tiendas = [
  {
    id: "FabiOs",
    logo: user1,
    nombre: "FabiOS",
    tipo: "Taller de celulares",
    descripcion:
      "FabiOS es un taller de reparación y venta de celulares ubicado en La Habana, especializado en productos Apple. Nos dedicamos a ofrecer soluciones rápidas y efectivas para iPhones, iPads y otros dispositivos de la marca, utilizando piezas de alta calidad y garantizando un servicio confiable. Además de reparaciones, contamos con una selección de celulares Apple a la venta, tanto nuevos como reacondicionados, adaptados a las necesidades de nuestros clientes. En FabiOS, nos enorgullece brindar atención personalizada y experta, asegurando que tu equipo Apple siempre funcione como nuevo.",
  },

  {
    id: "Fraganza",
    logo: user2,
    nombre: "Tutto Fraganza",
    tipo: "Perfumería",
    descripcion:
      "Tutto Fraganza es una tienda de perfumes ubicada en Varadero con varios años de experiencia, reconocida por ofrecer una amplia variedad de fragancias de alta calidad a los mejores precios del mercado. Nos especializamos en brindar a nuestros clientes una experiencia única, donde cada esencia es seleccionada cuidadosamente para garantizar su autenticidad y durabilidad. En Tutto Fraganza, la satisfacción del cliente es nuestra prioridad, por lo que nos enorgullece ofrecer perfumes de marcas reconocidas y garantizar la mejor relación calidad-precio, convirtiéndonos en la elección preferida de nuestros clientes.",
  },

  {
    id: "Skala",
    logo: user3,
    nombre: "SKALA Sports",
    tipo: "Tienda de artículos deportivos",
    descripcion:
      "Skala Sports es la tienda líder en La Habana para los aficionados al fútbol y baloncesto, ofreciendo ropa oficial de los principales clubes del mundo, como el Real Madrid, entre otros. Con una selección exclusiva de camisetas, shorts y accesorios, nuestras prendas destacan por su calidad, diseño y autenticidad. En Skala Sports, contamos con un excelente equilibrio entre calidad y precio, brindando tanto productos disponibles en tienda como opciones bajo pedido. Nos enorgullece poder ofrecer esta gran variedad de opciones a nuestros clientes, con el fin de cumplir con los deseos de todos. Ven y equípate con lo mejor en moda deportiva, que esperas!.",
  },
];

export const ProductosDescuentos = [
  {
    id: 1,
    nombre: "Iphone 13 Pro Max",
    descripcion: "Libre R-Sim, 128gb, Batería 87%",
    precio: "600",
    precioOriginal: "650",
    imagen: iphone1,
  },
  {
    id: 2,
    nombre: "Iphone 13 Pro Max",
    descripcion: "Libre, 128gb, Batería 86%",
    precio: "680",
    precioOriginal: "700",
    imagen: iphone2,
  },
  {
    id: 3,
    nombre: "Iphone 13 Pro Max",
    descripcion: "Libre, 128gb, Batería 85%",
    precio: "680",
    precioOriginal: "700",
    imagen: iphone3,
  },
  {
    id: 4,
    nombre: "Iphone 13",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "540",
    precioOriginal: "580",
    imagen: iphone4,
  },
];

export const ProductosFabios = [
  {
    id: 5,
    nombre: "Iphone 13",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "500",
    imagen: iphone5,
  },
  {
    id: 6,
    nombre: "Iphone 12 Pro Max",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "450",
    imagen: iphone6,
  },
  {
    id: 7,
    nombre: "Iphone 12 Pro Max",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "450",
    imagen: iphone7,
  },
  {
    id: 8,
    nombre: "Iphone 12",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "400",
    imagen: iphone8,
  },
  {
    id: 9,
    nombre: "Iphone 12",
    descripcion: "Libre, 128gb, Batería 87%",
    precio: "400",
    imagen: iphone9,
  },
];

export const FraganzaProductos = [
  {
    id: 10,
    nombre: "CK Man",
    descripcion: "eau de toilette, 100ml",
    precio: "25",
    imagen: perfume1,
  },
  {
    id: 11,
    nombre: "Versace Eros",
    descripcion: "eau de toilette, 100ml",
    precio: "45",
    imagen: perfume2,
  },
  {
    id: 12,
    nombre: "CK One",
    descripcion: "eau de toilette, 100ml",
    precio: "25",
    imagen: perfume3,
  },
  {
    id: 13,
    nombre: "CK Obsessed",
    descripcion: "eau de toilette for men, 100ml",
    precio: "25",
    imagen: perfume4,
  },
  {
    id: 14,
    nombre: "One Million",
    descripcion: "eau de toilette, 100ml",
    precio: "40",
    imagen: perfume5,
  },
  {
    id: 15,
    nombre: "Invictus",
    descripcion: "eau de toilette, 100ml",
    precio: "40",
    imagen: perfume6,
  },
  {
    id: 16,
    nombre: "CK Eternity",
    descripcion: "Parfum for men, 100ml",
    precio: "40",
    imagen: perfume7,
  },
  {
    id: 17,
    nombre: "CK One Shock",
    descripcion: "eau de toilette, 100ml",
    precio: "25",
    imagen: perfume8,
  },
];

export const SkalaProductos = [
  {
    id: 18,
    nombre: "Dusan Vlahovic 3ra Equipación",
    descripcion: "Juventus FC, #9",
    precio: "40",
    imagen: camiseta1,
  },
  {
    id: 19,
    nombre: "H-M Son 3ra Equipación",
    descripcion: "Tottenham Hotspur FC, #7",
    precio: "40",
    imagen: camiseta2,
  },
  {
    id: 20,
    nombre: "Cole Palmer",
    descripcion: "Chelsea FC, #20",
    precio: "40",
    imagen: camiseta3,
  },
  {
    id: 21,
    nombre: "Alejandro Garnacho 3ra Equipación",
    descripcion: "Manchester United FC, #17",
    precio: "40",
    imagen: camiseta4,
  },
  {
    id: 22,
    nombre: "Harry Kane 3ra Equipación",
    descripcion: "FC Bayern Munich, #9",
    precio: "40",
    imagen: camiseta5,
  },
  {
    id: 23,
    nombre: "Memphis Depay Local",
    descripcion: "S.C Corinthians Paulista, #94",
    precio: "40",
    imagen: camiseta6,
  },
  {
    id: 24,
    nombre: "Harry Kane Oktoberfest",
    descripcion: "FC Bayern Munich, #9",
    precio: "40",
    imagen: camiseta7,
  },
  {
    id: 25,
    nombre: "Equipciones FC Barcelona",
    descripcion: "Todos los jugadores disponibles",
    precio: "40 c/u",
    imagen: camiseta8,
  },
  {
    id: 26,
    nombre: "Equipciones Real Madrid FC",
    descripcion: "Todos los jugadores disponibles",
    precio: "40 c/u",
    imagen: camiseta9,
  },
  {
    id: 27,
    nombre: "Cristiano Ronaldo",
    descripcion: "Al-Nassr, #7",
    precio: "40",
    imagen: camiseta10,
  },
];
