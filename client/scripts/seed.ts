const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Marketing" },
        { name: "Leadership" },
        { name: "Cryptocurrency" },
        { name: "Finance" },
        { name: "Cannabis" },
        { name: "Software" },
        { name: "Filmmaking" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
