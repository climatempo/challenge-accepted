import Joibase from "joi"
import JoiDate from "@joi/date"

const Joi = Joibase.extend(JoiDate)

const weatherQuerySchema = Joi.object({
	startDate: Joi.date().format("YYYY-MM-DD").required(),
	endDate: Joi.date().format("YYYY-MM-DD").required(),
})

export default weatherQuerySchema
