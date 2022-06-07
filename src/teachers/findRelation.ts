import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  //buscar todos os cursos e seus professores
  const result = await prisma.courses.findMany({
    include: {
      teacher: true,
    }
  })

    console.log(result)


}

main();