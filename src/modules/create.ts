import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main () {
  
  const resume = await prisma.modules.create({
    data: {
      name: "Aprendendo Postgres",
      description: "Aprendendo Postgres do zero",
      CoursesModules: {
        create: {
          course: {
            connect: {
              id: "77717c49-6dbe-48b1-8886-1d95eed7bfa3"
            }
          }
        }
      }
    },
  });

  console.log(resume);
}

main();