'use server'

import prisma from "@/lib/prisma";

export const getRecipes = async () => {
  try {
    const recipes = await prisma.recipe.findMany();
    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const getSingleRecipe = async (id) => {
  try {
    const recipe = await prisma.recipe.findUnique({
      where: {
        id: id,
      },
    });
    return recipe;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

export const updateRecipe = async (id, data) => {
  try {
    const updatedRecipe = await prisma.recipe.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        ingredients: data.ingredients,
        video: data.video,
      },
    });
    return updatedRecipe;
  } catch (error) {
    console.error("Error updating recipe:", error);
    throw error;
  }
};

export const addRecipe = async (data) => {
  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        name: data.name,
        ingredients: data.ingredients,
        video: data.video,
      },
    });
    return newRecipe;
  } catch (error) {
    console.error("Error adding recipe:", error);
    throw error;
  }
};

export const removeRecipeFromServer = async (id) => {
  try {
    const deletedRecipe = await prisma.recipe.delete({
      where: {
        id,
      },
    });
    return deletedRecipe;
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw error;
  }
};
