class CustomError extends Error {
    public statusCode: number;
    public details: any;
  
    constructor(statusCode: number, message: string, details?: any) {
      super(message);
      this.statusCode = statusCode;
      this.details = details;
      this.name = this.constructor.name;
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  }
  
  export default CustomError;
  