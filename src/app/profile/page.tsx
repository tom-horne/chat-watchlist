import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

type ProfileProps = {
  username: string;
  firstname: string;
  lastname: string;
};

const Profile: React.FC<ProfileProps> = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/error");
  }

  const { data: UserInfo } = await supabase
    .from("UserInfo")
    .select()
    .eq("id", data.user.id);

  //   if (!UserInfo) {
  //     <div>No User data</div>;
  //   }

  const Username = UserInfo && UserInfo[0]?.username;
  const Firstname = UserInfo && UserInfo[0]?.firstname;
  const Lastname = UserInfo && UserInfo[0]?.lastname;

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4 gap-3">
        <p>{data.user.email}</p>
        <p>{Username}</p>
        <p>
          {Firstname} {Lastname}
        </p>
        {/* <form className="flex flex-col gap-3">
          <label htmlFor="username">Username</label>
          <input
            className="border"
            id="username"
            type="username"
            value={Username}
          />
          <label htmlFor="firstname">First Name</label>
          <input
            className="border"
            id="firstname"
            type="firstname"
            value={Firstname}
          />
          <label htmlFor="lastname">Last name</label>
          <input
            className="border"
            id="lastname"
            type="lastname"
            value={Lastname}
          />
          <button className="bg-blue-600 p-2 rounded">Save Details</button>
        </form> */}
      </div>
    </main>
  );
};

export default Profile;
