"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

type AuthBoxProps = {
  submit: (data: FormValues) => void;
  title: string;
};

const AuthBox: React.FC<AuthBoxProps> = ({ submit, title }) => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
    submit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-blue-400 w-72 p-4 rounded flex flex-col items-center justify-between space-y-4"
    >
      <label htmlFor="email">Email:</label>
      <input
        className="rounded p-2"
        id="email"
        type="email"
        placeholder="email@example.com"
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
        placeholder="password"
        required
        {...register("password", {
          minLength: {
            value: 6,
            message: "Passwords needs at least 6 characters",
          },
        })}
      />
      <p className="text-red-600">{errors?.password?.message as any}</p>

      <button
        className="bg-orange-200 hover:bg-orange-300 rounded p-2"
        type="submit"
      >
        {title}
      </button>
    </form>
  );
};

export default AuthBox;
