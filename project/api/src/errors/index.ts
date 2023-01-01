class AppError {
	public readonly code: number
	public readonly message: string

	constructor(code: number, message: string) {
		this.code = code
		this.message = message
	}
}

class NotFoundError extends AppError {
	constructor(message: string) {
		super(404, message)
	}
}

export { AppError, NotFoundError }
