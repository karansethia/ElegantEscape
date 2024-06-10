import {useNavigate} from "react-router-dom";
import {RegisterFormType} from "../pages/Register";
import {axiosReq} from "../utils/axios";
import {useMutation, useQuery} from "@tanstack/react-query";
import {SigninFormData} from "../pages/Signin";

export const useRegister = () => {
  const navigate = useNavigate();
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
    onSuccess: () => {
      console.log("success");
      navigate("/");
    },
  });
  if (error) {
    //todo: show toast
  }
  if (isSuccess) {
    console.log("Registered");
  }
  return {mutate, isPending};
};

export const useSignin = () => {
  const navigate = useNavigate();
  const request = async (data: SigninFormData) => {
    const response = await axiosReq.post(
      "/login",
      {...data},
      {withCredentials: true}
    );
    return response;
  };
  const {mutate, isError, status} = useMutation({
    mutationFn: request,
    retry: 0,
    onSuccess: () => {
      console.log("logged in");
      navigate("/");
    },
  });

  return {mutate, isError, status};
};

export const useValidate = () => {
  const request = async () => {
    const response = await axiosReq.get("/auth", {withCredentials: true});
    console.log(response.status);

    return response.data;
  };
  const {isError} = useQuery({
    queryKey: ["token"],
    queryFn: request,
    retry: false,
  });

  return {isError};
};
