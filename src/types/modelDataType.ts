export {};

declare global {
  interface IBackendResponse<T> {
    error?: string | string[];
    status: number | string;
    message: string;
    data?: T;
  }

  interface ILogin {
    accessToken: string;
    refreshToken: string;
    userId: number;
  }
}
