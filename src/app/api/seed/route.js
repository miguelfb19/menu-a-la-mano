import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    
//   await prisma.recipes.deleteMany();

  await prisma.recipes.createMany({
    data: [
      { name: "lavar loza", ingredients: []},
      { name: "hacer lavar el carro", ingredients: []},
      { name: "Hacer el crm de cmm", ingredients: []},
      { name: "almorzar", ingredients: [] },
      { name: "sacar el perro", ingredients: []},
    ],
  });

  return NextResponse.json({
    message: "Seed executed",
  });
}
