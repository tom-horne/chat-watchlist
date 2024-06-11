"use client";
import { createClient } from "../../../utils/supabase/client";

type uploadAvatarProps = {
  //   uploadFile: (event: any) => Promise<void>;
};

const UploadAvatar: React.FC<uploadAvatarProps> = ({}) => {
  const supabase = createClient();

  const uploadFile = async (event: any) => {
    try {
      const file = event.target.files[0];
      // const bucket = "avatars";

      // Call Storage API to upload file
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(file.name, file);

      // Handle error if upload failed
      if (error) {
        alert("Error uploading file.");
        return;
      }

      alert("File uploaded successfully!");
    } catch (error) {}
  };

  return (
    <div>
      <p>upload file</p>
      <input type="file" accept="image/" onChange={uploadFile} />
    </div>
  );
};

export default UploadAvatar;
