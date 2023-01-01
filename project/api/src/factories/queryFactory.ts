import prisma from "@/db"
import { Prisma } from "@prisma/client"

const getById = async (id: number, model: Prisma.ModelName) =>
	prisma[model].findUnique({
		where: { id },
	})

export default { getById }
