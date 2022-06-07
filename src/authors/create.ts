import { PrismaClient } from "@prisma/client";
import { addSyntheticLeadingComment } from "typescript";

const prismaClient = new PrismaClient();


async function main() {
// OneToMany
  const resume = await prismaClient.authors.create({
    data: {
      name: "Dan Brown",
      books: {
        createMany: {
          data: [
            { name: "Anjos e Demônios"},
            { name: "Código Da Vinci"},
            { name: "Inferno"},
            { name: "Origem"},
            { name: "Ponto de Impacto"},
          ]
        },
      },
    },
  })

  console.log(resume);
}


main();