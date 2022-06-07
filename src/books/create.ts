import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const resume = await prisma.books.create({
      data: {
        name: "Arquitetura Limpa",
        author_id: "8d71ba53-9d4d-4b13-a779-7b570553b413",
      },
  })
  
  console.log(resume);
}

main ();