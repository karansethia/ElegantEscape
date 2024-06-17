import {useForm} from "react-hook-form";
import {useSignin} from "../hooks/user-hooks";
import {Link} from "react-router-dom";

export type SigninFormData = {
  email: string;
  password: string;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<SigninFormData>();

  const {mutate, status} = useSignin();

  const submitHandler = (data: SigninFormData) => {
    mutate(data);
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-3xl font-semibold">Sign In</h2>
      <label className="text-gray-700 text-sm font-semibold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-2 border-blue-500 my-2 px-2 font-normal invalid:border-red-500"
          {...register("email", {
            required: "This field is required",
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-semibold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-2 border-blue-500 my-2 px-2 font-normal invalid:border-red-500"
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
      <div className="flex flex-row items-center justify-between">
        {status !== "success" ? (
          <button type="submit">Login</button>
        ) : (
          <button type="button">Loading...</button>
        )}
        <span>
          Not registered ?
          <Link to="/register" className="underline">
            Create account now
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Signin;
