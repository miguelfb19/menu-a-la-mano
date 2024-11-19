import { PlateCard } from "@/components";
import { getRecipes, removeRecipeFromServer } from "@/recipes/actions/recipe-actions";

export const metadata = {
  title: "Borrar receta",
  description: "Borrar receta",
};

export default async function NamePage() {
  const recipes = await getRecipes();
  const password = process.env.ADMIN_PASSWORD;

  const deleteRecipe = async (id) => {
    "use server";
    try {
        console.log(id); 
      await removeRecipeFromServer(id);
      return;
    } catch (error) {
      console.log("Error al eliminar la receta");
      throw error;
    }
  };

  return (
    <div className="flex gap-10 flex-wrap p-10 justify-center">
      {recipes.map((recipe) => (
        <PlateCard
          key={recipe.id}
          recipe={recipe}
          deleteRecipe
          password={password}
          handleDelete={deleteRecipe}
        />
      ))}
    </div>
  );
}
