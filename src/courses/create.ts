import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de React Native",
      description: "Curso excelente de React Native com Rodrigão",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Fabiano de Matos Lopes"
          },
          create: {
            name: "Fabiano de Matos Lopes"
          }
        }
      }
    },
  });

  console.log(result);
}

main(); 
