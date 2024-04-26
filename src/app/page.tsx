import Link from "next/link";
import { createClient } from "../../utils/supabase/server";
import { signout } from "./logout/actions";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return (
      <main className="flex items-center">
        <></>
      </main>
    );
  }
  return (
    <main className="flex items-center">
      {/* <p>Hello {data.user.email}</p>
      <form>
        <button className="bg-purple-200 p-4" formAction={signout}>
          Signout
        </button>
      </form> */}
    </main>
  );
}
