const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  console.info('No data to seed. See api/db/seeds.js for info.')
}
