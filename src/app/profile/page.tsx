import React from "react";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";
import MoreDataBox from "@/components/moredatabox/moredatabox";
import UploadAvatar from "@/components/uploadavatar/uploadavatar";

type ProfileProps = {
  username: string;
  firstname: string;
  lastname: string;
};

async function Profile() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/error");
  }

  const { data: profileData } = await supabase
    .from("profiles")
    .select()
    .eq("id", data.user.id);

  const Username = profileData && profileData[0]?.username;
  const Firstname = profileData && profileData[0]?.firstname;
  const Lastname = profileData && profileData[0]?.lastname;

  if (!Username) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h2>Enter more account information below</h2>
        <MoreDataBox />
        <UploadAvatar user={data} />
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
        <UploadAvatar user={data} />
      </div>
    </main>
  );
}

export default Profile;
