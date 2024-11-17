'use client'

import React, { useState } from "react";

export const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [link, setLink] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    let ingredientsArray = ingredients.split(',')

    console.log(ingredientsArray);
    console.log(`${name}, ${ingredientsArray}, ${link}`);
  };

  return (
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
          value={ingredients}
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
          htmlFor="link"
          className="mb-3 block text-base font-medium text-darkOrange"
        >
          Link de video
        </label>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          name="link"
          id="link"
          placeholder="Enter your subject"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange focus:shadow-md"
        />
      </div>
      <div className="mb-5">
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
      </div>
      <div>
        <button className="btn" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};
