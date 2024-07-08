import {axiosReq} from "../utils/axios";
import {useMutation, useQuery} from "@tanstack/react-query";

import {toast} from "sonner";
import {HotelType} from "../types";

export const useHotelRegister = () => {
  const request = async (data: FormData) => {
    const response = axiosReq.post("/manage-hotel", data, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  };

  const {
    mutate: registerHotel,
    isPending,
    isIdle,
  } = useMutation({
    mutationFn: request,
    onSuccess: () => {
      toast.success("Hotel Registered successfully");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });
  const isLoading = isPending && !isIdle;

  return {registerHotel, isLoading};
};

export const useGetHotels = () => {
  const request = async (): Promise<HotelType[]> => {
    const response = await axiosReq.get("/manage-hotel", {
      withCredentials: true,
    });
    return response.data;
  };

  const {data: myHotels, isLoading} = useQuery({
    queryKey: ["my-hotels"],
    queryFn: request,
  });

  return {myHotels, isLoading};
};

export const useGetHotelDetails = (id: string) => {
  const request = async() => {
    const response = await axiosReq.get(`/manage-hotel/${id}`, {
      withCredentials: true
    });
    return response.data;
  }
  const {data: myHotelDetail, isLoading, isError} = useQuery({
    queryKey: ["myHotel", id],
    queryFn: request,
enabled: !!id
  });
  if(isError){
    toast.error("Something went wrong")
  }
  return {myHotelDetail, isLoading}
}
