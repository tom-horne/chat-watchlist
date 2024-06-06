"use client";

import React from "react";
import { createClient } from "../../../utils/supabase/client";
import { useForm } from "react-hook-form";
import { profileData } from "@/app/profile/actions";

type MoreDataBoxProps = {};

type FormValues = {
  username: string;
  firstname: string;
  lastname: string;
};

const MoreDataBox: React.FC<MoreDataBoxProps> = () => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
    profileData(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-green-400 rounded flex flex-col w-72 p-4 justify-between space-y-4"
      >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username", {
            minLength: {
              value: 6,
              message: "Usernames needs at least 6 characters",
            },
            required: "A username is required",
          })}
        ></input>
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          {...register("firstname", {
            required: "A name is required",
          })}
        ></input>
        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          {...register("lastname", {
            required: "A surname is required",
          })}
        ></input>
        <button className="hover:bg-green-200 rounded p-4">Save</button>
      </form>
    </div>
  );
};

export default MoreDataBox;
