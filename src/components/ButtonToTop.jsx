"use client";

import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { animateScroll as scroll } from "react-scroll";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import clsx from "clsx";

export function ButtonToTop() {
  //Hacemos el scrollToTop con una funcion debido a que los parametros como 'duration'
  //no los agarra directamente en el JSX
  let scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };
  const [showBtn, setShowBtn] = useState(false);
  const { height: vh } = useWindowSize(); 


  //Funcion para mostrar o quitar el boton de Scroll Top
  const handleButton = () => {

    if (window.scrollY > vh) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleButton);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleButton);
    };

    
  }, [vh]);

  return (
    <>
      <div>
        <IoArrowUpCircleOutline
          size={50}
          onClick={scrollToTop}
          className={clsx(
            "fixed bottom-10 right-5 cursor-pointer text-white bg-orange rounded-full md:opacity-65 hover:opacity-100 ",
            { "hidden": !showBtn }
          )}
        />
      </div>
    </>
  );
}
