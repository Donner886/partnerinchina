/**
 * Adds seed data to your db
 * Demo data
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
    await prisma.demoBlog.create({
         data:{
            id: 5 ,
            article:'this is the first article automatically generated. '
        }
    })
}

seed()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch( (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally( () =>{
        console.info('seed mock-up data done. thanks! ')
    });
