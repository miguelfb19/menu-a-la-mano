import { getRecipes } from "@/recipes/actions/recipe-actions";
import { RandomRecipe } from "@/components";

export const metadata = {
 title: 'Receta aleatorio',
 description: 'Generación de una receta aleatoria para preparar en tu casa',
 icons: {
  icon: '/favicon.svg',}
};

export default async function RandomPage() {
  const recipes = await getRecipes();

  return (
    <section className="my-10">
      <RandomRecipe recipes={recipes}/>
    </section>
  );
}
