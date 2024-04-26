import Link from "next/link";
import { signup } from "./actions";
import AuthBox from "@/components/authbox/authbox";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";

export default async function SignUpPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/error");
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <>
        <AuthBox submit={signup} title="Sign up" />
      </>
      <Link href="/login">
        <p>Already registered? Click here</p>
      </Link>
    </main>
  );
}
