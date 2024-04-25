import Link from "next/link";
import { signup } from "./actions";

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
          <button className="bg- bg-orange-200 p-2" formAction={signup}>
            Sign up
          </button>
        </form>
      </>
      <Link href="/login">
        <p>Already registered? Click here</p>
      </Link>
    </main>
  );
}
