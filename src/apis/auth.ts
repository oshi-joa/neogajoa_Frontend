import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import instance from "../utils";
import { setToken } from "../utils/Token";
import toast from "react-hot-toast";

interface loginResponseType {
  status: string;
  token: string;
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
      onError: (error: any) => {
        toast.error(error.message);
      },
    }
  );
};
