export class InvalidArgumentError extends Error {
  type = "InvalidArgumentError";

  message: string;

  constructor(message?: string) {
    super(`InvalidArgumentError${message ? `: ${message}` : ""}`);
    this.message = message || "";
  }

  public toJSON() {
    return {
      message: this.message,
      type: this.type,
    };
  }
}
