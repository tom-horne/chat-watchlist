"use client";
import { useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import Image from "next/image";

type uploadAvatarProps = {
  //   uploadFile: (event: any) => Promise<void>;
  user: any;
};

const UploadAvatar: React.FC<uploadAvatarProps> = ({ user }) => {
  const supabase = createClient();

  const [imageUrl, setImageUrl] = useState("");

  const uploadFile = async (event: any) => {
    try {
      const file = event.target.files[0];
      // const bucket = "avatars";

      const { error } = await supabase.storage
        .from("avatars")
        .upload(user.user.id, file);

      if (error) {
        alert("Error uploading file.");
        return;
      }

      //   const { data } = supabase.storage
      //     .from("avatars")
      //     .getPublicUrl(user.user.id);
      //   setImageUrl(data.publicUrl);

      alert("File uploaded successfully!");
    } catch (error) {}
  };

  const { data } = supabase.storage.from("avatars").getPublicUrl(user.user.id);
  //   setImageUrl(data.publicUrl);

  console.log("====================================");
  console.log("IMGURL", data.publicUrl);
  console.log("====================================");

  return (
    <div>
      <p>upload file</p>
      <input type="file" accept="image/" onChange={uploadFile} />
      <div className="bg-red-400">
        <Image
          src={data.publicUrl ?? ""}
          alt={"Profile Picture"}
          width={500}
          height={500}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
};

export default UploadAvatar;
