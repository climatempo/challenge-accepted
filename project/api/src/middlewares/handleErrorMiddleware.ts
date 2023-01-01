import { Request, Response, NextFunction } from "express"
import { AppError } from "@/errors"

const handleError = (
	err: AppError | any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err)
	err instanceof AppError
		? res.status(err.code).send({ error: { message: err.message } })
		: res.status(500).send("Internal server error")
}

export default handleError
