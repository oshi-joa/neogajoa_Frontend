import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import instance from "../utils";
import { setToken } from "../utils/Token";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface loginResponseType {
  status: string;
  token: string;
}

interface SignupReqeustType {
  name: string;
  email: string;
  password: string;
}

export const Login = () => {
  return useMutation(
    async (body: { email: string; password: string }) => {
      const { data } = await instance.post<loginResponseType>("/login", body);
      return data;
    },
    {
      onSuccess: ({ token }) => {
        setToken(token);
      },
      onError: (error: AxiosError) => {
        toast.error(error.message, { duration: 1500});
      },
    }
  );
};

export const useSignup = () => {
  return useMutation(
    async (params: SignupReqeustType) => {
      return await instance.post<SignupReqeustType>('/signup', params);
    },
    {
      onSuccess: () => {
        toast.success('회원가입에 성공했습니다.', { duration: 1500} )
      },
      onError: (error: AxiosError) => {
        toast.error(error.message, { duration: 1500 });
      },
    }
  );
};

export const useGetCode = () => {
  return useMutation(
    async (email: string) => {
      return await instance.post<string>(`/code`, email);
    },
  )
}
