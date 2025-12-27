export class createError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statuscode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}
