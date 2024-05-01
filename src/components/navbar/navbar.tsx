import Link from "next/link";
import { createClient } from "../../../utils/supabase/server";
import { signout } from "@/app/logout/actions";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = async ({}) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return (
      <header className="w-full border-0 border-b-[0.5px] border-solid border-slate-300 shadow-inner top-0">
        <nav className="flex justify-between items-center h-16 max-w-5xl mx-auto">
          <div className="mr-auto">
            <Link href="/">
              <h3>Title</h3>
            </Link>
          </div>

          <div>
            <ul className="flex gap-x-6">
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/signup">
                <li>Signup</li>
              </Link>
              <li></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
  return (
    <header className="w-full border-0 border-b-[0.5px] border-solid border-slate-300 shadow-inner top-0">
      <nav className="flex justify-between items-center h-16 max-w-5xl mx-auto">
        <div className="mr-auto">
          <Link href="/">
            <h3>Title</h3>
          </Link>
        </div>

        <div>
          <ul className="flex gap-x-6">
            <li>
              <p>Hello, {data.user.email}</p>
            </li>
            <li>
              <form>
                <button formAction={signout}>Signout</button>
              </form>
            </li>
            <li>
              <Link href="/profile">
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
