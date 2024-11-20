import { getRecipes } from "@/recipes/actions/recipe-actions";
import { RandomRecipe } from "@/components";

export const metadata = {
 title: 'Menú aleatorio',
 description: 'Generación de un menú aleatorio',
 icons: {
  icon: '/favicon.svg',}
};

export default async function RandomPage() {
  const recipes = await getRecipes();

  return (
    <>
      <RandomRecipe recipes={recipes}/>
    </>
  );
}
