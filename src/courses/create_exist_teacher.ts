import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de NodeJS",
      description: "Curso Excelente",
      duration: 300,
      teacher: {
        connect: {
          id: "597f06bb-d27d-44fc-b028-94008739c19f"
        }
      }
    },
  });
  
  console.log(result);
}

main();