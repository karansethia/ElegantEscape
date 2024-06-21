import {useForm} from "react-hook-form";
import {useSignin} from "../hooks/user-hooks";
import {Link} from "react-router-dom";

export type SigninFormData = {
  email: string;
  password: string;
};
type LoginProps = {};
import signin from "../assets/signin.png";
const Login = ({}: LoginProps) => {
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
    <div className="flex flex-row justify-between items-center h-full">
      <div className="w-[45%] flex items-center justify-end me-10">
        <img src={signin} className="w-4/6" />
      </div>
      <div className="w-[50%] p-12 h-full bg-hero bg-no-repeat bg-custom bg-right-top flex justify-center">
        <form
          className="w-5/6 max-w-[500px] flex flex-col gap-5 border border-slate-100 p-12 me-10 rounded bg-[#ffffff775] backdrop-blur-sm shadow-md"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-4xl font-rouge text-[#9E3900] ">
            Welcome back...
          </h2>
          <label className="text-gray-700 text-sm font-poppins flex-1">
            Email
            <input
              type="email"
              className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal invalid:border-red-500"
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
              className="border rounded w-full py-2 border-slate-500 my-2 px-2 font-normal invalid:border-red-500"
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
          <div className="flex flex-col items-center gap-4">
            {status !== "success" ? (
              <button
                type="submit"
                className="bg-[#FEC785] px-10 py-1.5 rounded-sm text-xs text-slate-600 "
              >
                Log In
              </button>
            ) : (
              <button type="button">Loading...</button>
            )}
            <span className="text-xs font-poppins">
              Not registered ?{" "}
              <Link to="/register" className="underline">
                Create account now
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
