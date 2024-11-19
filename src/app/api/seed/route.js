import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  console.log(process.env.NODE_ENV);

  await prisma.recipe.deleteMany();

  await prisma.recipe.createMany({
    data: [
      {
        name: "Sudado",
        ingredients: [
          "papa",
          "yuca",
          "proteína preferida",
          "cebolla",
          "tomate",
          "sal",
          "especias",
          "cilantro",
        ],
        video: "https://youtu.be/VeBqyO33tJ0?si=FtI0O9w4A8XCnjxW",
      },
      {
        name: "Gulash",
        ingredients: [
          "proteína de preferencia",
          "cebolla",
          "tomate",
          "sal",
          "especias",
          "cilantro",
          "papa",
          "arvejas",
          "zanahoria",
        ],
        video: "https://youtu.be/VvXw7JDOasQ?si=1k-0j4Ewxhia_kLd",
      },
      {
        name: "Menú tradicional: Carne, arroz y ensalada",
        ingredients: ["carne", "arroz", "lechuga", "tomate", "limón"],
        video: "",
      },
      {
        name: "Lasagna",
        ingredients: [
          "pasta de lasagna",
          "proteína de preferencia",
          "queso parmesano",
          "pasta de tomate o salsa napolitana",
          "crema de leche",
          "queso mozzarella",
        ],
        video: "https://youtu.be/qApiIVTJyhs?si=dcjjfc9OEp9Imk9u",
      },
      {
        name: "Sancocho",
        ingredients: [
          "papa",
          "yuca",
          "platano verde",
          "cilantro",
          "pollo o espinazo",
          "cebolla",
          "tomate",
        ],
        video: "https://youtu.be/6ir1iBf8n7k?si=ebIxPZf5qMFh8m-W",
      },
      {
        name: "Frijoles",
        ingredients: [
          "frijoles cargamanto",
          "papa criolla",
          "plátano maduro",
          "aguacate",
          "arroz",
          "carne o chicharrón",
        ],
        video: "https://youtu.be/FY8ez3BjbTc?si=5M4bhTiBCYeG9ckM",
      },
      {
        name: "Arroz con pollo",
        ingredients: [
          "arroz",
          "pollo desmenuzado",
          "zanahoria",
          "arvejas",
          "cebolla",
          "pimentón",
        ],
        video: "https://youtu.be/uY9NRsVjSGU?si=oC0vSpvktKDn0h5J",
      },
      {
        name: "Ajiaco",
        ingredients: [
          "papa criolla",
          "papa sabanera",
          "papa pastusa",
          "pollo desmechado",
          "mazorca",
          "guascas",
          "alcaparras",
          "crema de leche",
        ],
        video: "https://youtu.be/B5cLT_lBWXY?si=kIM_QzC9hgI2N4_o",
      },
      {
        name: "Lentejas",
        ingredients: [
          "lentejas",
          "zanahoria",
          "papa",
          "cebolla",
          "ajo",
          "sal",
          "especias",
          "arroz",
        ],
        video: "https://youtu.be/JKwvPcm8OWM?si=aCZ76qlc-Egqob8t",
      },
      {
        name: "Bandeja Paisa",
        ingredients: [
          "arroz",
          "frijoles",
          "carne molida",
          "chorizo",
          "morcilla",
          "chicharrón",
          "arepa",
          "plátano maduro",
          "huevo frito",
          "aguacate",
        ],
        video: "https://youtu.be/_cs_Cwnk_oQ?si=khgntzS7IWwJ2jYi",
      },
    ],
  });

  return NextResponse.json({
    message: "Seed executed",
  });
}
