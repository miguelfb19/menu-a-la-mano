import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import Link from "next/link";

export const FooterComp = () => {
  return (
    <footer className="h-[15vh] grid grid-cols-3 justify-center items-center bg-orange">
      <div className="max-sm:hidden"></div>
      <span className="text-center text-white flex flex-col items-center gap-2 text-sm max-sm:justify-start max-sm:text-xs max-sm:text-left max-sm:pl-8 max-sm:col-span-2">
        &copy; Todos los derechos reservados.
        <br />
        Desarrollado por Miguel Ángel Fernández Barco.
        <br />
        Pereira, Colombia.
      </span>
      <div className="flex gap-4 text-white justify-end mr-10 max-sm:col-span-1">
        <Link href="https://github.com/miguelfb19" target="blank" className="hover:text-darkOrange transition-all">
          <FaGithub size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/miguel-angel-fernandez-barco-7b802429b"
          target="blank"
          className="hover:text-darkOrange transition-all"
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
    </footer>
  );
};
