import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className="sm:py-20 py-5">
      <h1 className="text-center font-bold sm:text-[40px] text-2xl text-[#1F1F25]">Join others using QPaid 💙</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 sm:px-32 px-5 sm:pt-16 pt-10">
        <TestimonialCard
          description="I was nervous about selling my online business to a buyer I hadn’t met in person. This escrow service made the process 
        transparent and secure for both parties. The buyer’s funds were protected until I delivered everything as promised, 
        and I received mine without a hitch once the deal was complete. Great peace of mind!"
          name="Tunde"
          role="Online Business Seller"
        />
        <TestimonialCard
          description="Working with this escrow service was a game-changer. 
          As a real estate investor, securing safe and smooth transactions is crucial, 
          and they made the entire process seamless. From clear communication to timely updates, 
          I always felt confident that my funds were handled properly. Highly recommend!t"
          name="Sarah"
          role="Real Estate Investor"
        />
        <TestimonialCard
          description="Escrow services are a must for high-value transactions, 
          and this company exceeded my expectations. I recently purchased a rare piece of antique jewelry, 
          and the service ensured the item was inspected and the funds securely transferred."
          name="Rachel"
          role="eCommerce store"
        />
      </div>
    </section>
  )
}

export default TestimonialSection;
