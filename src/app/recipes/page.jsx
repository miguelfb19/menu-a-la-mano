export const dynamic = "force-dynamic";
export const revalidate = 0;
//Esto hace que esta pagina sea generada dinamicamente siempre

import { PlateCard } from "@/components";
import {
  getRecipes,
  removeRecipeFromServer,
} from "@/recipes/actions/recipe-actions";

export const metadata = {
  title: "Todas las recetas",
  description: "Todas las recetas de Menú a la mano en esta página",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RecipesPage({ searchParams }) {
  console.log(await searchParams)

  const searchStr = await searchParams.search || "";
  const recipes = await getRecipes(searchStr);
  const password = process.env.ADMIN_PASSWORD;

  const onDeleteRecipe = async (id) => {
    "use server";

    try {
      await removeRecipeFromServer(id);
      return;
    } catch (error) {
      console.error({
        message: "Error al eliminar la receta en el servidor",
        status: 500,
      });
      throw error;
    }
  };

  return (
    <div className="flex gap-10 flex-wrap p-10 justify-center">
      {recipes.map((recipe) => (
        <PlateCard
          key={recipe.id}
          recipe={recipe}
          password={password}
          removeRecipe={onDeleteRecipe}
        />
      ))}
    </div>
  );
}
