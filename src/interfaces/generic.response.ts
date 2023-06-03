import { Response } from 'express';
import { PaginationResponseDTO } from '../todo/dto/todo.dto';

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

  success(data?: T, statusCode = 200): void {
    const response: any = {
      success: true,
    };

    if (data !== undefined) {
      response.data = data;
    }


    this.res.status(statusCode).json(response);
  }

  successPagination(data?: any, statusCode = 200): void {
    const response: any = {
      success: true,
    };

    response.data = data.data
    response.currentPage = data.currentPage;
    response.pageSize = data.pageSize;
    response.totalItems = data.totalItems;
    response.totalPages = data.totalPages;
    

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