import { PrismaClient } from "@prisma/client";
import { athletes, visits, footwearNotes, quotes, protocols, themes } from "../src/data/seed-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Clearing existing data...");
  await prisma.footwearNote.deleteMany();
  await prisma.quote.deleteMany();
  await prisma.protocol.deleteMany();
  await prisma.visit.deleteMany();
  await prisma.theme.deleteMany();
  await prisma.athlete.deleteMany();

  console.log("Seeding athletes...");
  for (const athlete of athletes) {
    await prisma.athlete.create({ data: athlete });
  }

  console.log("Seeding visits...");
  for (const visit of visits) {
    await prisma.visit.create({ data: visit });
  }

  console.log("Seeding footwear notes...");
  for (const note of footwearNotes) {
    await prisma.footwearNote.create({ data: note });
  }

  console.log("Seeding quotes...");
  for (const quote of quotes) {
    await prisma.quote.create({ data: quote });
  }

  console.log("Seeding protocols...");
  for (const protocol of protocols) {
    await prisma.protocol.create({ data: protocol });
  }

  console.log("Seeding themes...");
  for (const theme of themes) {
    await prisma.theme.create({ data: theme });
  }

  const counts = {
    athletes: await prisma.athlete.count(),
    visits: await prisma.visit.count(),
    footwearNotes: await prisma.footwearNote.count(),
    quotes: await prisma.quote.count(),
    protocols: await prisma.protocol.count(),
    themes: await prisma.theme.count(),
  };
  console.log("Seed complete:", counts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
