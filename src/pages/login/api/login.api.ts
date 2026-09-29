import axios from "axios";
import { CredentialsApi } from "./login.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/login`;

interface LoginResponse {
  isValid: boolean;
  message: string;
}

export const isValidLogin = async (credentials: CredentialsApi): Promise<boolean> =>
  axios.post<LoginResponse>(url, credentials).then(({data})=> data.isValid);