import Joi from "joi"

const localesQuerySchema = Joi.object({
	search: Joi.string().min(3).max(30).required(),
})

export default localesQuerySchema
