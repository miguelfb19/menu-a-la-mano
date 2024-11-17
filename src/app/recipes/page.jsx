import { PlateCard } from "@/components";
import { recipes } from "@/lib/data/recipes";

export default function RecipesPage() {
  return (
    <div className="flex gap-10 flex-wrap p-10 justify-center">
      {recipes.map((recipe)=>(
        <PlateCard key={recipe.id} recipe={recipe}/>
      ))
      }
    </div>
  );
}