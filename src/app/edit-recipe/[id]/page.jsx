import { RecipeForm } from "@/components";
import { getSingleRecipe, updateRecipe } from "@/recipes/actions/recipe-actions";

export const metadata = {
  title: "Editar receta",
  description: "Editar receta",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function EditRecipePage({ params }) {
  const { id } = await params;
  const password = process.env.ADMIN_PASSWORD;
  const recipe = await getSingleRecipe(id);

  const onEditRecipe = async (formData) => {
    "use server";
   try {
    await updateRecipe(id, formData)
    return
   } catch (error) {
    console.error('Error al guardar la receta en la base de datos:', error)
    throw error
   }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold text-center uppercase text-darkOrange mb-10">
        editar esta receta
      </h1>
      <div className="mx-auto w-full max-w-[550px]">
        <RecipeForm
          isEditing
          editedRecipe={recipe}
          handleEditRecipe={onEditRecipe}
          password={password}
        />
      </div>
    </div>
  );
}
