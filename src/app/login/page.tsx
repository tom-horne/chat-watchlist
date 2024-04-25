import { login } from "./actions";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/">
        <button className="bg-green-200 p-4">Home</button>
      </Link>
      <>
        <form className="bg-blue-800 p-4 flex flex-col items-center justify-between">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button className="bg- bg-orange-200 p-2" formAction={login}>
            Login
          </button>
        </form>
      </>
      <Link href="/signup">
        <p>New around? Click here to signup</p>
      </Link>
    </main>
  );
}
