import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import instance from "../utils";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface CreateBoardRequestType {
  email: string;
  Title: string;
  Description: string;
}

interface BoardResponseType {
  CreatedAt: "2024-04-20T20:41:58.877+09:00";
  UpdatedAt: "2024-04-20T20:41:58.877+09:00";
  DeletedAt: null;
  ID: 2;
  Author: "정현서";
  Title: "test";
  Description: "아ㅏ 개발하기 시러";
  Date: "2024-04-20 20:41:58";
}

const router = "/board";

export const useCreateBoard = () => {
  return useMutation(
    async (body: CreateBoardRequestType) => {
      const { data } = await instance.post<{
        model: BoardResponseType;
        status: string;
      }>(`${router}/post`, body);
      return data;
    },
    {
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
};

export const useGetBoards = () => {
  return useQuery(
    ["boards"],
    async () => {
      const { data } = await instance.get<{
        data: BoardResponseType[];
        status: string;
      }>(`${router}/get`);
      return data;
    },
    {
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
};

export const useGetDetailBoard = (id: string | number) => {
  return useQuery(
    ["detailBoard", id],
    async () => {
      const { data } = await instance.get<{
        model: BoardResponseType;
        status: string;
      }>(`${router}/get/${id}`);
      return data;
    },
    {
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
};

export const useDelateBoard = () => {
  return useMutation(
    async (id: string | number) => {
      const { data } = await instance.delete(`${router}/delete/${id}`);
      return data;
    },
    {
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
    }
  );
};
