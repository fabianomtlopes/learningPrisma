import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  
  const result = await prisma.coursesModules.delete({
      where: {
        id: "b6f25e63-b24e-4323-b27a-47a3c9633c91"
      }
  })

  console.log(result);
}

main ();