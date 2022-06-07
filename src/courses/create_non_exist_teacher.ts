import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de Elexir",
      description: "Curso Advanced de Elexir",
      teacher: {
        create: {
          name: "Rodolfo Lopes",
        },
      }
    },
  });

  console.log(result);
}

main(); 
