"use client";

import { CgSpinner } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { PlateCard } from "@/components";

import { useEffect, useState } from "react";

const generateRandom = (recipes) => {
  const random = Math.floor(Math.random() * recipes.length);
  return recipes[random];
};

export const RandomRecipe = ({recipes}) => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [check, setCheck] = useState(false);
  const recipe = generateRandom(recipes);

  useEffect(() => {
    setRandomRecipe(recipe);
  }, []);

  const newRandom = () => {
    setRandomRecipe(recipe);
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
    }, 500);
  };
  return (
    <div>
      {randomRecipe ? (
        <section
          id="main"
          className="flex flex-col justify-center items-center mt-10 max-sm:mb-36"
        >
          <h1 className="uppercase text-3xl font-bold text-darkOrange mb-10 text-center max-sm:mt-0">
            ¡¡¡puedes hacer esta receta hoy!!!
          </h1>
          <PlateCard recipe={randomRecipe} />
          <button
            onClick={newRandom}
            className="btn flex justify-center items-center mt-10 w-[15rem] min-h-12"
          >
            {check ? <FaCheck size={20} /> : <p>Otra receta</p>}
          </button>
        </section>
      ) : (
        <section className="flex flex-col justify-center items-center h-[80vh] text-2xl text-darkOrange">
          <CgSpinner className="animate-spin duration-200" size={35} />
        </section>
      )}
    </div>
  );
};
