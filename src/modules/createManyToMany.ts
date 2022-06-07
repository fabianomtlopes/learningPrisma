import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const resume = await prisma.coursesModules.create({
    data: {
      fk_id_course: "77717c49-6dbe-48b1-8886-1d95eed7bfa3",
      fk_id_module: "7c46ac25-1467-41bb-acdd-872f0060c59c"
    }
  })

  console.log(resume);
}

main();