import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";
import MoreDataBox from "@/components/moredatabox/moredatabox";

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
    .from("profiles")
    .select()
    .eq("id", data.user.id);

  const Username = UserInfo && UserInfo[0]?.username;
  const Firstname = UserInfo && UserInfo[0]?.firstname;
  const Lastname = UserInfo && UserInfo[0]?.lastname;

  if (!Username) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h2>Enter more account information below</h2>
        <MoreDataBox />
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col p-4 gap-3">
        <p>{data.user.email}</p>
        <p>{Username}</p>
        <p>
          {Firstname} {Lastname}
        </p>
      </div>
    </main>
  );
};

export default Profile;
