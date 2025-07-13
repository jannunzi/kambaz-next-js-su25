import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" /> <br />
      <input placeholder="password" type="password" className="wd-password" />
      <br />
      <Link href="/Account/Profile" id="wd-signup-btn">
        Sign up
      </Link>
      <br />
      <Link href="/Account/Signin" id="wd-signup-link">
        Sign in
      </Link>
    </div>
  );
}
