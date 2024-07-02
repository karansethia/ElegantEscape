import {axiosReq} from "../utils/axios";
import {useMutation} from "@tanstack/react-query";

import {toast} from "sonner";

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
