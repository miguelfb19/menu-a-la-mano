import { RecipeForm } from "@/components";
import { getSingleRecipe, updateRecipe } from "@/recipes/actions/recipe-actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Editar receta",
  description: "Editar receta",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function EditRecipePage({ params }) {
  const { id } = await params;

  const recipe = await getSingleRecipe(id);

  const editRecipe = async (formData) => {
    "use server";
   try {
    await updateRecipe(id, formData)
    redirect('/recipes')
   } catch (error) {
    console.log('Error al guardar la receta en la base de datos:', error)
    throw error
   }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold text-center uppercase text-darkOrange mb-10">
        editar receta
      </h1>
      <div className="mx-auto w-full max-w-[550px]">
        <RecipeForm
          isEditing
          editedRecipe={recipe}
          handleEditRecipe={editRecipe}
        />
      </div>
    </div>
  );
}
