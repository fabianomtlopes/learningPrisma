import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  
  const resume = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 250,
          name: "Learning Prisma",
          description: "Firt time with Prisma?",
          teacher: {
            connectOrCreate: {
              where: {
                name: "Igor Matos"
              },
              create: {
                name: "Igor Matos"
              }
            }
          }
        }
      },
      module: {
        create: {
          name: "Chapter One",
          description: "How It's Work... Hello World"
        }
      }
    }
  })

  console.log(resume);
}

main ();
