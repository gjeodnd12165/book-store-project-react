import { ResetPasswordProps } from "../pages/ResetPassword";
import { SigninProps } from "../pages/Signin";
import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post('/users/signup', userData);
  return response.data;
}

export const resetRequest = async (data: ResetPasswordProps) => {
  const response = await httpClient.post('/users/reset', { email: data.email });
  return response.data;
}

export const resetPassword = async (data: ResetPasswordProps) => {
  const response = await httpClient.patch('/users/reset', data);
  return response.data;
}

interface ISigninResponse {
  token: string;
}

export const signin = async (data: SigninProps) => {
  const response = await httpClient.post<ISigninResponse>('/users/signin', data);
  return response.data;
}