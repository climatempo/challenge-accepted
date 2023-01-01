import Joi from "joi"
import localesQuerySchema from "./localesQuerySchema"

const localesSchema = Joi.object({
	query: localesQuerySchema,
}).options({ allowUnknown: true })

export default localesSchema
