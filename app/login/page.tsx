
import Link from "next/link";
import { Input } from "../components/input";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="sm:w-[450px] p-5 bg-white rounded-xl">
        <form>
          <span className="block text-sm text-[#5F738C]">Welcome</span>
          <h1 className="text-xl font-bold text-[#1F2126] pb-5">Sign in to continue</h1>
          <label className="text-[#5F738C] block text-sm pb-1">Email</label>
          <Input type="text" placeholder="Email" className="w-full h-11 rounded-xl" />
          <label className="text-[#5F738C] block text-sm pb-1 pt-5">Password</label>
          <Input type="password" placeholder="Password" className="w-full h-11 rounded-xl" />
        </form>
        <Link href="/" className="block py-7  text-[#5F738C]">Forgot password?</Link>
        <button className="block w-full bg-[#398DFA] rounded-xl py-3 px-5 font-semibold text-white hover:bg-[#398DFA]/80">Sign In</button>
        <span className="block text-[#5F738C] pt-5">
          Don’t have an account? <Link href="/" className="text-[#398DFA] text-sm">Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default LoginPage;
