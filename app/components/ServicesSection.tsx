import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="sm:py-28 py-10">
      <div className="flex justify-center">
        <div className="flex sm:gap-10 gap-5">
          <div>
            <Image src="/stars1.svg" width={82.74} height={130.64} alt="Stars Align" />
          </div>
          <div>
            <h1 className="font-bold sm:text-[40px] text-2xl text-[#1F2126] text-center">Business without worries.</h1>
            <h2 className="text-[#6600B6] font-bold sm:text-[40px] text-2xl text-center pt-5">Benefits of QPaid</h2>
          </div>
          <div className=""><Image src="/stars2.svg" width={82.74} height={130.64} alt="Stars Align" /></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:px-40 px-5 sm:gap-20 gap-4 sm:pt-28 pt-5 items-center">
        <div>
          <h1 className="font-bold sm:text-[40px] text-2xl">Funds are secured till <br /> work is delivered</h1>
          <p className="pt-8 text-[#5F738C]">Your payment stays secured in Qpaid and fully insured until you confirm delivery or service completion. No more stories or surprises.</p>
          <button type="button" className="mt-8 flex items-center gap-1.5 bg-[#FAF3FF] hover:bg-[#e8daf1] text-[#8F00FF] py-3 px-5 rounded-lg">
            Get started
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7806 12.6737L14.0306 19.4237C13.8899 19.5644 13.699 19.6435 13.5 19.6435C13.301 19.6435 13.1101 19.5644 12.9694 19.4237C12.8286 19.283 12.7496 19.0921 12.7496 18.8931C12.7496 18.694 12.8286 18.5032 12.9694 18.3624L18.4397 12.8931H3.75C3.55109 12.8931 3.36032 12.814 3.21967 12.6734C3.07902 12.5327 3 12.342 3 12.1431C3 11.9441 3.07902 11.7534 3.21967 11.6127C3.36032 11.4721 3.55109 11.3931 3.75 11.3931H18.4397L12.9694 5.92368C12.8286 5.78295 12.7496 5.59208 12.7496 5.39306C12.7496 5.19403 12.8286 5.00316 12.9694 4.86243C13.1101 4.7217 13.301 4.64264 13.5 4.64264C13.699 4.64264 13.8899 4.7217 14.0306 4.86243L20.7806 11.6124C20.8504 11.6821 20.9057 11.7648 20.9434 11.8559C20.9812 11.9469 21.0006 12.0445 21.0006 12.1431C21.0006 12.2416 20.9812 12.3392 20.9434 12.4303C20.9057 12.5213 20.8504 12.604 20.7806 12.6737Z" fill="#8F00FF" />
            </svg>
          </button>
        </div>
        <div className="sm:pt-0 pt-8">
          <Image src="/service1.png" height={381} width={482} alt="Service Description Image" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:px-40 px-5 sm:gap-20 gap-4 sm:pt-28 pt-12 sm:pb-0 items-center">
        <div className="sm:pb-0 pb-12">
          <Image src="/service2.png" height={381} width={482} alt="Service Description Image" />
        </div>
        <div>
          <h1 className="font-bold sm:text-[40px] text-2xl">Insured transactions, <br /> at every point</h1>
          <p className="pt-8 text-[#5F738C]">Payments are only released when all agreed terms are met, ensuring trust and fairness for both parties. No more chasing payments or bad cheques!</p>
          <button type="button" className="mt-8 flex items-center gap-1.5 bg-[#FAF3FF] hover:bg-[#e8daf1] text-[#8F00FF] py-3 px-5 rounded-lg">
            Get started
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7806 12.6737L14.0306 19.4237C13.8899 19.5644 13.699 19.6435 13.5 19.6435C13.301 19.6435 13.1101 19.5644 12.9694 19.4237C12.8286 19.283 12.7496 19.0921 12.7496 18.8931C12.7496 18.694 12.8286 18.5032 12.9694 18.3624L18.4397 12.8931H3.75C3.55109 12.8931 3.36032 12.814 3.21967 12.6734C3.07902 12.5327 3 12.342 3 12.1431C3 11.9441 3.07902 11.7534 3.21967 11.6127C3.36032 11.4721 3.55109 11.3931 3.75 11.3931H18.4397L12.9694 5.92368C12.8286 5.78295 12.7496 5.59208 12.7496 5.39306C12.7496 5.19403 12.8286 5.00316 12.9694 4.86243C13.1101 4.7217 13.301 4.64264 13.5 4.64264C13.699 4.64264 13.8899 4.7217 14.0306 4.86243L20.7806 11.6124C20.8504 11.6821 20.9057 11.7648 20.9434 11.8559C20.9812 11.9469 21.0006 12.0445 21.0006 12.1431C21.0006 12.2416 20.9812 12.3392 20.9434 12.4303C20.9057 12.5213 20.8504 12.604 20.7806 12.6737Z" fill="#8F00FF" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;
