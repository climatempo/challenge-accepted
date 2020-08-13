export class MissingArgumentError extends Error {
  type = "MissingArgumentError";

  message: string;

  constructor(message?: string) {
    super(`MissingArgumentError${message ? `: ${message}` : ""}`);
    this.message = message || "";
  }

  public toJSON() {
    return {
      message: this.message,
      type: this.type,
    };
  }
}
