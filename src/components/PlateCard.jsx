"use client";

import Image from "next/image";
import Link from "next/link";
import {
  inputPassword,
  successSubmit,
  deniedPassword,
  confirmPassword,
} from "@/recipes/alerts";

import { MdOndemandVideo } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { redirect } from "next/navigation";

export const PlateCard = ({
  recipe,
  deleteRecipe = false,
  password = "",
  removeRecipe = () => {},
}) => {

  const handleDelete = async () => {
    const digitedPassword = await inputPassword();
    if (digitedPassword == password) {
      confirmPassword();
      removeRecipe(recipe.id);
      successSubmit("Receta eliminada correctamente");
      redirect("/recipes");
    }
    deniedPassword();
    return;
  };

  return (
    <div>
      <div
        id="main"
        className="flex flex-col bg-orange shadow-md rounded-lg max-w-[19rem] h-full"
      >
        <Image
          width={500}
          height={500}
          className="rounded-e-full p-8"
          src="/images/food.jpg"
          alt="plate"
        />

        <div id="content" className="flex flex-col gap-5 px-5 pb-5 h-full">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white text-center capitalize">
              {recipe.name}
            </h1>
          </div>
          <p className="text-white font-semibold text-xl tracking-tight capitalize">
            {recipe.ingredients.map((ingredient, index) => (
              <span key={ingredient + index}>
                {ingredient.trim()}
                {index === recipe.ingredients.length - 1 ? "." : ","}{" "}
              </span>
            ))}
          </p>
          <span id="space-after-p" className="flex flex-1"></span>
          {deleteRecipe ? (
            <div className="flex text-white justify-center hover:text-darkOrange">
              <button onClick={handleDelete}>
                <RiDeleteBinLine size={40} />
              </button>
            </div>
          ) : (
            <div id="icons" className="flex justify-around items-center">
              {(recipe.video != "" || recipe.video) && (
                <Link
                  href={recipe.video}
                  target="_blank"
                  className="text-white hover:text-darkOrange"
                >
                  <MdOndemandVideo size={50} />
                </Link>
              )}
              <Link href={`edit-recipe/${recipe.id}`}>
                <GoPencil
                  size={40}
                  className="text-white hover:text-darkOrange"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
