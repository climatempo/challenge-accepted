export default class BadRequestError extends Error {
	status: number;

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, BadRequestError.prototype);
		
		this.status = 400;
	}
}