import { Request, Response, NextFunction } from "express"
import { ObjectSchema } from "joi"

const validateSchema = (schema: ObjectSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req, { abortEarly: false })
		if (error)
			return res
				.status(422)
				.send(error.details.map(({ message }) => message))
		next()
	}
}

export default validateSchema
