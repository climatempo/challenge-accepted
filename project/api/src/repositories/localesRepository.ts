import prisma from "@/db"

const getLocalesByQuery = async (query: string) =>
	prisma.locale.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		select: {
			id: true,
			name: true,
			state: true,
			latitude: true,
			longitude: true,
		},
	})

export default {
	getLocalesByQuery,
}
