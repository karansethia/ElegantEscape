import {useForm, type SubmitHandler} from "react-hook-form";

import {useRegister} from "../hooks/user-hooks";

import signin from "../assets/signin.png";

export type RegisterFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {mutate, isPending} = useRegister();
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormType>();
  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
    mutate(data);
  };
  return (
    <div className="flex flex-row justify-between items-start h-full">
      <div className="w-[45%] flex items-center justify-end me-10">
        <img src={signin} className="w-4/6" />
      </div>
      <div className="w-[50%] p-10 h-full bg-hero bg-no-repeat bg-custom bg-right-top flex justify-center">
        <form
          className="w-5/6 max-w-[500px] flex flex-col gap-1 border border-slate-100 p-10 me-10 -mt-4 rounded bg-[#ffffff775] backdrop-blur-sm shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl font-rouge text-[#9E3900] ">
            We're ready to serve
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <label className="text-gray-700 text-sm font-poppins flex-1">
              First Name
              <input
                type="text"
                className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </label>
            <label className="text-gray-700 text-sm font-poppins flex-1">
              Last Name
              <input
                type="text"
                className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
                {...register("lastName", {
                  required: "This field is required",
                })}
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </label>
          </div>
          <label className="text-gray-700 text-sm font-poppins flex-1">
            Email
            <input
              type="email"
              className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
              {...register("email", {
                required: "This field is required",
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-poppins flex-1">
            Password
            <input
              type="password"
              className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-poppins flex-1">
            Confirm Password
            <input
              type="password"
              className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal text-xs invalid:border-red-500"
              {...register("confirmPassword", {
                validate: (val) => {
                  if (!val) {
                    return "This field is required";
                  } else if (watch("password") !== val) {
                    return "Password do not match";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </label>
          <span className="flex justify-center mt-3">
            <button
              type="submit"
              className="bg-[#FEC785] px-10 py-1.5 rounded-sm text-xs text-slate-600 "
            >
              {isPending ? "Loading" : "Create Account"}
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
