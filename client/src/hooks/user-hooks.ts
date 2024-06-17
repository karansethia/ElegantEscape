import {useNavigate} from "react-router-dom";
import {RegisterFormType} from "../pages/Register";
import {axiosReq} from "../utils/axios";
import {useMutation, useQuery} from "@tanstack/react-query";
import {SigninFormData} from "../pages/Signin";
import {useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
    onSuccess: async () => {
      toast.success("Registered successfully");
      await queryClient.invalidateQueries({queryKey: ["token"]});
      console.log("success");
      navigate("/");
    },
  });
  if (error) {
    toast.error("Something went wring");
  }
  if (isSuccess) {
    console.log("Registered");
  }
  return {mutate, isPending};
};

export const useSignin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ["token"]});
      toast.success("Logged in successfully");
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
  const {isSuccess} = useQuery({
    queryKey: ["token"],
    queryFn: request,
    retry: false,
  });

  return {isSuccess};
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const request = async () => {
    const response = await axiosReq.post("/logout", {withCredentials: true});
    return response;
  };

  const {mutate, isError} = useMutation({
    mutationFn: request,
    retry: 0,
    onSuccess: async () => {
      await queryClient.invalidateQueries({queryKey: ["token"]});
      toast.success("Logged out successfully");
      // navigate("/");
    },
  });
  if (isError) {
    //todo show toast
  }
  return {mutate};
};
