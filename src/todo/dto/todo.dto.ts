export class TodoRequestDTO {
    name: string;
}

export class TodoResponseDTO {
    id: number;
    name: string;
}

export interface PaginationResponse<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
  }

  export class PaginationResponseDTO<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
  }