const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-800">
          &copy; {new Date().getFullYear()} @thejasondev. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
