import dayjs from "dayjs"

const formatDate = (date, format = "DD/MM/YYYY") => {
	return dayjs(date).format(format)
}

export { formatDate }
