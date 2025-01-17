/* eslint-disable @next/next/no-img-element */
const FooterHeroSection = () => {
  return (
    <div className="sm:px-20 px-5 relative sm:h-[500px] sm:py-0 py-20 overflow-hidden">
      <div className="absolute inset-0 w-full">
        <div className="absolute left-0 -bottom-16 h-full">
          <img
            src="/div2.png"
            alt="Left background pattern"
            className="w-full h-full"
          />
        </div>

      </div>
      <div
        className="max-w-6xl mx-auto rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("/Vector.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}
      >
        <div className="absolute inset-0 bg-[#8F00FF] opacity-90"></div>
        <div className="relative z-10 sm:p-20 p-10">
          <h1 className="text-center font-bold text-white sm:text-[40px] sm:leading-10 text-2xl">
            Trust, and Technology in <br /> Every Transaction.
          </h1>
          <p className="pt-10 text-center text-white">
            Make your first secure, insured transaction with Qpaid!
          </p>
          <div className="flex justify-center pt-5">
            <button className="bg-white text-[#8F00FF] px-10 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FooterHeroSection;
