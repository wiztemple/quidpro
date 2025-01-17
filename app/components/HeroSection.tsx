/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="relative bg-[#FAF3FF] sm:h-[800px] h-full w-full overflow-hidden">
    {/* Background Images */}
    <div className="absolute inset-0 w-full h-full">
      {/* Left background */}
      <div className="absolute left-0 top-0 h-full">
        <img 
          src="/swiggle.svg"
          alt="Left background pattern"
          className="w-full h-full"
        />
      </div>
      
      {/* Right background */}
      <div className="absolute right-0 top-0  h-full">
        <img 
          src="/div.png"
          alt="Right background pattern"
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-12 px-5 sm:pt-32 pt-10">
        <div className="flex justify-center">
          <div className="sm:w-[500px] w-full">
            <h1 className="sm:text-5xl text-3xl font-bold sm:leading-[60px] text-[#050038]">
              Secure every transaction with  confidence
            </h1>
            <p className="py-4 text-[#5F738C]">
              Transact with Peace of Mind – With Qpaid, <br /> Every Transaction is Insured and Secured.
            </p>
            <button
              className="px-8 py-3 mt-1 bg-[#8F00FF] rounded-lg text-white hover:bg-[#8F00FF]/80"
              type="button"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center sm:py-0 py-10">
          <Image
            src="/dashboard-card.png"
            alt="hero"
            width={470}
            height={393}
          />
        </div>
      </div>
    </div>
  </section>
);
};


export default HeroSection;
