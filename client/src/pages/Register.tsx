import {useForm, type SubmitHandler} from "react-hook-form";
import {useRegister} from "../hooks/user-hooks";

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
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-semibold">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-semibold flex-1">
          First Name
          <input
            type="text"
            className="border rounded w-full py-2 border-blue-500 my-2 px-2 font-normal "
            {...register("firstName", {
              required: "This field is required",
            })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-semibold flex-1">
          Last Name
          <input
            type="text"
            className="border rounded w-full py-2 border-blue-500 my-2 px-2 font-normal "
            {...register("lastName", {
              required: "This field is required",
            })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>
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
      <label className="text-gray-700 text-sm font-semibold flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-2 border-blue-500 my-2 px-2 font-normal invalid:border-red-500"
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
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-semibold hover:bg-blue-500 rounded"
        >
          {isPending ? "Loading" : "Create Account"}
        </button>
      </span>
    </form>
  );
};

export default Register;
