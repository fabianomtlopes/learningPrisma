import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  
  const result = await prisma.courses.findMany({
    where: {
      OR: [
            {
              name: {
                contains: 'ReactJS',
                mode: "insensitive"
              }
            },
            {
              name: {
                contains: "React Native",
                mode: "insensitive",
              }
            }
      ],
      AND: {
        duration: 300,
      }
    }
  })

  console.log(result);
}


main();