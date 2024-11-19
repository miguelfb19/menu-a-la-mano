"use client";

import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { successSubmit, errorSubmit } from "@/recipes/alerts";


export const RecipeForm = ({
  editedRecipe = {},
  isEditing = false,
  handleCreateRecipe = () => {},
  handleEditRecipe = () => {},
}) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [video, setVideo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipeToEdit();
    setLoading(true);
  }, []);

  const resetForm = () => {
    setLoading(false)
    setName("");
    setIngredients("");
    setVideo("");
  };

  const getRecipeToEdit = () => {
    if (isEditing) {
      setName(editedRecipe.name || "");
      setIngredients(editedRecipe.ingredients || "");
      setVideo(editedRecipe.video || "");
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const formData = {
      name: name.trim().toLocaleLowerCase(),
      ingredients: isEditing
        ? ingredients
        : ingredients.split(",").map((item) => item.trim()),
      video: video.trim(),
    };
    try {
      if (isEditing) {
        handleEditRecipe(formData);
        successSubmit('Receta editada correctamente');
        resetForm();
        return;
      }
      handleCreateRecipe(formData);
      successSubmit('Receta guardada correctamente');
      resetForm()
      return;
    } catch {
      errorSubmit('Error al guardar la receta');
    }
  };

  // TODO: Cuando borro el campo de name para cambiarlo se carga el spinner

  return (
    <>
      {!loading ? (
        <section className="flex flex-col justify-center items-center h-[50vh] text-2xl text-darkOrange">
          <CgSpinner className="animate-spin duration-200" size={35} />
        </section>
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
                placeholder="Enter your subject"
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
