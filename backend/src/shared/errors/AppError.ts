class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly keyError: string;

  constructor(message: string, statusCode = 400, keyError = '') {
    this.message = message;
    this.statusCode = statusCode;
    this.keyError = keyError;
  }
}

export default AppError;
