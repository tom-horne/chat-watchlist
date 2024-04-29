"use client";

import { useForm } from "react-hook-form";

type AuthBoxProps = {
  submit: any;
  title: string;
};

const AuthBox: React.FC<AuthBoxProps> = ({ submit, title }) => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <form
      onSubmit={handleSubmit(submit)}
      noValidate
      className="bg-blue-400 w-72 p-4 rounded flex flex-col justify-between space-y-4"
    >
      <label htmlFor="email">Email:</label>
      <input
        className="rounded p-2"
        id="email"
        type="email"
        {...register("email", {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format",
          },
          required: "An email is required",
        })}
      />
      <p className="text-red-600">{errors?.email?.message as any}</p>

      <label htmlFor="password">Password:</label>
      <input
        className="rounded p-2"
        id="password"
        type="password"
        required
        {...register("password", {
          minLength: {
            value: 6,
            message: "Passwords needs at least 6 characters",
          },
        })}
      />
      <p className="text-red-600">{errors?.password?.message as any}</p>

      <input
        className="bg-orange-200 hover:bg-orange-300 rounded p-2"
        type="submit"
      />
    </form>
  );
};

export default AuthBox;
