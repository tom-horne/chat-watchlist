import Link from "next/link";
import { createClient } from "../../utils/supabase/server";
import { signout } from "./logout/actions";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return (
      <main className="flex items-center">
        <p>Not Logged in</p>
      </main>
    );
  }
  return (
    <main className="flex items-center">
      <p>Logged in</p>
    </main>
  );
}
