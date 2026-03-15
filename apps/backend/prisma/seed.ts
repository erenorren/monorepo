import { prisma } from './db';

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Leo", email: "leo@example.com" },
      { name: "John", email: "john@example.com" },
      { name: "Jane", email: "jane@example.com" }
    ]
  })
}

main()