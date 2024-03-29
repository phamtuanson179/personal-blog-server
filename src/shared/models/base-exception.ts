export class BaseException {
  statusCode: number;
  error: string;
  message: string[];
  timestamp: number;

  constructor(statusCode: number, error: string, message: string[]) {
    this.statusCode = statusCode;
    this.error = error;
    this.message = message;

    this.timestamp = new Date().getTime();
  }
}
