import Image from "next/image";
import Link from "next/link";
import { MdOndemandVideo } from "react-icons/md";

export const PlateCard = ({ recipe }) => {
  return (
    <div>
      <div className="bg-orange shadow-md rounded-lg max-w-[19rem] min-h-[30rem] max-h-[30rem]">
        <Image
          width={500}
          height={500}
          className="rounded-e-full p-8"
          src="/images/food.jpg"
          alt="plate"
        />

        <div className="flex flex-col gap-5 px-5 pb-5">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white text-center">
              {recipe.name}
            </h1>
          </div>
          <p className="text-white font-semibold text-xl tracking-tight">
            {recipe.ingredients.map((ingredient, index) => (
              <span key={ingredient + index}>
                {ingredient.trim()}
                {index === recipe.ingredients.length - 1 ? "." : ","}{" "}
              </span>
            ))}
          </p>
          {(recipe.video != "" || recipe.video) && (
            <Link
              href={recipe.video}
              target="_blank"
              className="text-white hover:text-darkOrange self-center"
            >
              <MdOndemandVideo size={50} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
