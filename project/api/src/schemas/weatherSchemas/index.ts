import Joi from "joi"
import weatherQuerySchema from "./weatherQuerySchema"

const weatherSchema = Joi.object({
	query: weatherQuerySchema,
}).options({ allowUnknown: true })

export default weatherSchema
