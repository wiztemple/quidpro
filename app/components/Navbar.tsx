import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sm:h-20 h-16 flex justify-between items-center sm:px-12 px-5 bg-[#FAF3FF]">
      <Image src="/logo-alt.svg" alt="logo" width={100} height={100} />
      <div className="flex gap-3 items-center">
        <Link href="/login" className="border border-[#E1E6ED] rounded-lg bg-white block px-5 py-2.5 hover:bg-[#8F00FF] hover:text-white">Sign in</Link>
        <button className="px-5 py-2.5 bg-[#8F00FF] rounded-lg text-white hover:bg-[#8F00FF]/80">Get started</button>
      </div>
    </nav>
  )
}

export default Navbar;
