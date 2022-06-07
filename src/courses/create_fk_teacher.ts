import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 250,
      name: "Curso de ReactJS",
      description: "Curso Otimizado de ReactJS",
      fk_id_teacher: "ba0f1b0d-f4ab-4037-9460-2a79ad4c2068",
      }
    });

  console.log(result);
}

main(); 
