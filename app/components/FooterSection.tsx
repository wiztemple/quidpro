import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-[#1F2126] sm:px-20 px-5 sm:py-14 py-10 sm:flex items-center justify-between">
      <Link href="/">
        <Image src="/logo.svg" width={142.3} height={42.91} alt="Logo" />
      </Link>
      <span className="text-white text-sm font-semibold block sm:pt-0 pt-5">© 2022 PostPilot, Inc. All rights reserved.</span>
    </footer>
  )
}

export default FooterSection;
