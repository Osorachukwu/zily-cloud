import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-custom-radial flex justify-center bg-red-400 py-2 h-[100vh]">
      <div className="flex items-center">
        <form
          onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          className="flex flex-col gap-2 bg-gray-300 p-10 rounded-xl space-y-3"
        >
            <p className="text-xl font-bold">Register</p>
          <input
            type="text"
            {...register("name", { required: "This field is required" })}
            placeholder="Name"
            className="rounded-md h-14 outline-green-500 px-4 w-96"
          />
          {errors.username?.message && (
            <p>
              {typeof errors.username.message === "string" &&
                errors.username.message}
            </p>
          )}

          <input
            type="tel"
            {...register("tel", {
              required: "This field is required",
              minLength: { value: 4, message: "Min length is 4" },
            })}
            placeholder="Phone number"
            className="rounded-md h-14 outline-green-500 px-4 w-96"
          />
          {errors.password?.message && (
            <p>
              {typeof errors.password.message === "string" &&
                errors.password.message}
            </p>
          )}
          <input
            type="email"
            {...register("email", {
              required: "This field is required",
              minLength: { value: 4, message: "Min length is 4" },
            })}
            placeholder="Email"
            className="rounded-md h-14 outline-green-500 px-4 w-96"
          />
          {errors.password?.message && (
            <p>
              {typeof errors.password.message === "string" &&
                errors.password.message}
            </p>
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
            <p>
              {typeof errors.password.message === "string" &&
                errors.password.message}
            </p>
          )}
          <input
            type="password"
            {...register("password", {
              required: "This field is required",
              minLength: { value: 4, message: "Min length is 4" },
            })}
            placeholder="Confirm Password"
            className="rounded-md h-14 outline-green-500 px-4"
          />
          {errors.password?.message && (
            <p>
              {typeof errors.password.message === "string" &&
                errors.password.message}
            </p>
          )}

          <input
            type="submit"
            value="Register"
            className="bg-green-500 text-white rounded-md inline-block py-4 px-10"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;