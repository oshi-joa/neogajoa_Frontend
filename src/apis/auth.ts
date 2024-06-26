import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import instance from '../utils';
import { setToken } from '../utils/Token';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

interface loginResponseType {
  status: string;
  token: string;
}

interface SignupReqeustType {
  name: string;
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation(
    async (body: { email: string; password: string }) => {
      const { data } = await axios.post<loginResponseType>(
        `${process.env.REACT_APP_BASE_URL}/login`,
        body,
      );
      return data;
    },
    {
      onSuccess: ({ token }) => {
        setToken(token);
      },
      onError: (error: AxiosError) => {
        toast.error(error.message, { duration: 1500 });
      },
    },
  );
};

export const useSignup = () => {
  return useMutation(
    async (params: SignupReqeustType) => {
      return await instance.post<SignupReqeustType>('/signup', params);
    },
    {
      onSuccess: () => {
        toast.success('회원가입에 성공했습니다.', { duration: 1500 });
      },
      onError: (error: AxiosError) => {
        toast.error(error.message, { duration: 1500 });
      },
    },
  );
};

export const useGetCode = () => {
  return useMutation(async (email: string) => {
    return await instance.post<string>(`/code`, email);
  });
};

export const useLogout = () => {
  return useQuery(
    ['logout'],
    async () => {
      const { data } = await instance.get('/logout');
      return data;
    },
    {
      onSuccess: () => {
        console.log('로그인 페이지로 이동');
      },
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    },
  );
};
