import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4 gap-3">
        <label htmlFor="email">Email</label>
        <p className="border" id="email">
          {data.user.email}
        </p>
        <form className="flex flex-col gap-3">
          <label htmlFor="username">Username</label>
          <input className="border" id="username" type="username" />
          <label htmlFor="firstname">First Name</label>
          <input className="border" id="firstname" type="firstname" />
          <label htmlFor="surname">Surname</label>
          <input className="border" id="surname" type="surname" />
          <button className="bg-blue-600 p-2 rounded">Save Details</button>
        </form>
      </div>
    </main>
  );
};

export default Profile;
