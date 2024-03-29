export class BaseResponse<T> {
  statusCode: number;
  data: T;
  pageIndex?: number;
  pageSize?: number;
  timestamp: number;

  constructor(
    data: T,
    statusCode = 200,
    pageSize?: number,
    pageIndex?: number,
  ) {
    this.statusCode = statusCode;
    this.data = data;

    pageSize && (this.pageSize = pageSize);
    pageIndex && (this.pageSize = pageIndex);

    this.timestamp = new Date().getTime();
  }
}
