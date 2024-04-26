import Link from "next/link";

type AuthBoxProps = {
  submit: any;
  title: string;
};

const AuthBox: React.FC<AuthBoxProps> = ({ submit, title }) => {
  return (
    <form className="bg-blue-800 p-4 flex flex-col items-center justify-between">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button className="bg- bg-orange-200 p-2" formAction={submit}>
        {title}
      </button>
    </form>
  );
};

export default AuthBox;
