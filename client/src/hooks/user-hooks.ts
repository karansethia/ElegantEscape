import {RegisterFormType} from "../pages/Register";
import {axiosReq} from "../utils/axios";
import {useMutation} from "@tanstack/react-query";

export const useRegister = () => {
  const request = async (data: RegisterFormType) => {
    const response = await axiosReq.post(
      "/register",
      {...data},
      {withCredentials: true}
    );
    return response;
  };
  const {mutate, error, isPending, isSuccess} = useMutation({
    mutationFn: request,
    retry: 1,
  });
  if (error) {
    //todo: show toast
  }
  if (isSuccess) {
    console.log("Registered");
  }
  return {mutate, isPending};
};
