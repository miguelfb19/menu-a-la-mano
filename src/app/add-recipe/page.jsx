import { RecipeForm } from "@/components";
import { redirect } from "next/navigation";
import { addRecipe } from "@/recipes/actions/recipe-actions";

export const metadata = {
  title: "Agregar una receta",
  description: "Agregar una receta",
  icons: {
    icon: "favicon.svg",
  },
};

export default function AddRecipePage() {

  
  const handleAddRecipe = async (data) => {
    "use server";
    try {
      await addRecipe(data);
      redirect("/recipes");
    } catch (error) {
      console.log("Error al agregar la receta en la base de datos:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold text-center uppercase text-darkOrange mb-10">
        agregar nueva receta
      </h1>
      <div className="mx-auto w-full max-w-[550px]">
        <RecipeForm handleCreateRecipe={handleAddRecipe} />
      </div>
    </div>
  );
}
