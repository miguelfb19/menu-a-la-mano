import { PlateCard } from "@/components";
// import { recipes } from "@/lib/data/recipes";
import { getRecipes } from "@/recipes/actions/recipe-actions";

export const metadata = {
  title: "Todas las recetas",
  description: "Todas las recetas de Menú a la mano en esta página",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <div className="flex gap-10 flex-wrap p-10 justify-center">
      {recipes.map((recipe) => (
        <PlateCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
