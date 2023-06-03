import { Response } from 'express';

interface Pagination {
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

class ApiResponse<T> {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }

  success(data?: T, pagination?: Pagination, statusCode = 200): void {
    const response: any = {
      success: true,
    };

    if (data !== undefined) {
      response.data = data;
    }

    if (pagination !== undefined) {
      response.pagination = pagination;
    }

    this.res.status(statusCode).json(response);
  }

  error(message: string, statusCode = 500): void {
    this.res.status(statusCode).json({
      success: false,
      error: message,
    });
  }
}

export default ApiResponse;