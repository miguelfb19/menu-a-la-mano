import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {

//   await prisma.recipe.deleteMany();

  await prisma.recipe.createMany({
    data: [
      {
        name: "receta de prueba 1",
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
        name: "receta de prueba 2",
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
    ],
  });

  return NextResponse.json({
    message: "Test recipes executed",
  });
}
