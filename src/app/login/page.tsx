import AuthBox from "@/components/authbox/authbox";
import { login } from "./actions";
import Link from "next/link";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/error");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <>
        <AuthBox submit={login} title="Login" />
      </>
      <Link href="/signup">
        <p className="pt-4 hover:text-blue-900 hover:underline">
          New around? Click here to signup
        </p>
      </Link>
    </main>
  );
}
