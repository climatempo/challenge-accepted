export class NotFoundError extends Error {
  type = "NotFoundError";

  message: string;

  constructor(message?: string) {
    super(`NotFoundError${message ? `: ${message}` : ""}`);
    this.message = message || "";
  }

  public toJSON() {
    return {
      message: this.message,
      type: this.type,
    };
  }
}
