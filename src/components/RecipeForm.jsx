"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import {
  successSubmit,
  errorSubmit,
  inputPassword,
  deniedPassword,
} from "@/recipes/alerts";
import { useRouter } from "next/navigation";

export const RecipeForm = ({
  editedRecipe = {},
  isEditing = false,
  handleCreateRecipe = () => {},
  handleEditRecipe = () => {},
  password,
}) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    getRecipeToEdit();
    setLoading(true);
  }, []);

  const resetForm = () => {
    setLoading(false);
    setName("");
    setIngredients("");
    setVideo("");
  };

  const getRecipeToEdit = () => {
    if (isEditing) {
      setName(editedRecipe.name);
      setIngredients(editedRecipe.ingredients);
      setVideo(editedRecipe.video);
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const digitedPassword = await (isEditing ? inputPassword('editar') : inputPassword('agregar'))

    if (digitedPassword == password) {
      const formData = {
        name: name.trim().toLowerCase(),
        ingredients: Array.isArray(ingredients)
          ? ingredients
          : ingredients.split(",").map((item) => item.trim()),
        video: video.trim(),
      };
      try {
        if (isEditing) {
          handleEditRecipe(formData);
          successSubmit("Receta editada correctamente");
          resetForm();
          router.push('/recipes')
          return;
        }
        handleCreateRecipe(formData);
        successSubmit("Receta guardada correctamente");
        resetForm();
        router.push('/recipes')
        return;
      } catch (error) {
        errorSubmit("Error al guardar la receta");
        console.error("Error al guardar la receta:");
        throw error;
      }
    }
    deniedPassword();
    return;
  };

  return (
    <>
      {!loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <span>
            Los campos marcados con <span className="text-red-500">*</span> son
            obligatorios
          </span>
          <form className="mt-8" onSubmit={onSubmitForm}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-darkOrange"
              >
                Nombre de la receta <span className="text-red-500">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Ej. Fideos"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="ingredients"
                className="mb-3 block text-base font-medium text-darkOrange"
              >
                Ingredientes <span className="text-red-500">*</span>
              </label>
              <input
                value={isEditing ? ingredients : ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Separados por coma (,)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange focus:shadow-md"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="video"
                className="mb-3 block text-base font-medium text-darkOrange"
              >
                video tutorial
              </label>
              <input
                value={video}
                onChange={(e) => setVideo(e.target.value)}
                type="text"
                name="video"
                id="video"
                placeholder="Tutorial de YouTube (opcional)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange focus:shadow-md"
              />
            </div>
            {/* <div id="image" className="mb-5">
          <label
            htmlFor="image"
            className="mb-3 block text-base font-medium text-darkOrange"
          >
            Imagen
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange focus:shadow-md"
          />
                </div> */}
            <div>
              <button className="btn" type="submit">
                {isEditing ? "Guardar" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
