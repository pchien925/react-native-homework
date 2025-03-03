import axios from "@/src/services/axiosInstance";

export const loginApi = (email: string, password: string) => {
  const url = `/api/v1/auth/login`;
  return axios.post<IBackendResponse<ILogin>>(url, { email, password });
};
