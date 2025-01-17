import React from 'react';

interface TestimonialCardProps {
  description: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ description, name, role }) => {
  return (
    <div className="p-6 border border-[#E1E6ED] rounded-2xl bg-white">
      <p className="text-[#5F738C] mb-6">
        {description}
      </p>
      <div>
        <h4 className="font-semibold text-sm text-[#1F2126]">{name}</h4>
        <p className="text-sm text-[#5F738C]">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
