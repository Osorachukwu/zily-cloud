import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center bg-red-400 pt-20 bg-custom-radial h-[100vh]">
     <div  className="flex flex-col items-center">
     <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col gap-2 bg-gray-300 p-10 rounded-xl space-y-3"
      >
        <p className="text-xl font-bold">Login</p>
        <input
          type="text"
          {...register("username", { required: "This field is required" })}
          placeholder="Username"
          className="rounded-md h-14 outline-green-500 px-4 w-96"
        />
        {errors.username?.message && (
          <p>{typeof errors.username.message === "string" && errors.username.message}</p>
        )}

        <input
          type="password"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 4, message: "Min length is 4" },
          })}
          placeholder="Password"
          className="rounded-md h-14 outline-green-500 px-4 w-96"
        />
        {errors.password?.message && (
          <p>{typeof errors.password.message === "string" && errors.password.message}</p>
        )}

        <input type="submit" value="Login"  className="bg-green-500 text-white rounded-md inline-block text-xl h-12" />
      </form>
     </div>
      
    </div>
  );
}

export default Login;
