import React from "react";

interface TestimonialProps {
  testimonialText: string;
  studentName: string;
  studentTitle: string;
  universityName: string;
  universitySubtitle?: string;
  universityLogo: React.ReactNode;
  studentImage: string;
  heading?: string;
  reverse?: boolean; // Add this

}

const StudentTestimonial: React.FC<TestimonialProps> = ({
  testimonialText,
  studentName,
  studentTitle,
  universityName,
  universitySubtitle = "University",
  universityLogo,
  studentImage,
  heading = "Hear what our students have to say",
  reverse = false,  

}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 bg-orange-50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className={`relative ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="bg-white cut-shape-testis">
            <img
              src={studentImage}
              alt={`${studentName} testimonial`}
              className="w-full h-full object-cover"
              style={{ minHeight: "500px" }}
            />
          </div>
        </div>

        {/* Right side - Testimonial */}
        <div className={`w-100 space-y-5 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          {/* Header */}
          <h2
            className="font-serif text-2xl md:text-3xl text-gray-800"
            style={{ fontFamily: "GuthenBloots, serif" }}
          >
            {heading}
          </h2>

          {/* Quote */}
          <div className="space-x-50">
            <div className="flex">
              <div className="w-1 bg-gray-400"></div>
              <p
                className="font-serif text-3xl ml-10 leading-tight text-gray-900 font-bold"
                style={{ fontFamily: "Recoleta, serif" }}
              >
                {testimonialText}
              </p>
            </div>
          </div>

          {/* Attribution */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {universityLogo}
              <div>
                <div className="font-semibold text-gray-900">{universityName}</div>
                <div className="text-sm text-gray-600">{universitySubtitle}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">{studentName}</div>
              <div className="text-sm text-gray-600">{studentTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with Stanford logo
const StanfordLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" fill="#8C1515" />
    <path
      d="M14 12h8v8h-8v16h8v-8h8v16h-16v-32zm18 0h8v8h-8v16h8v-8h8v16h-16v-32z"
      fill="white"
    />
  </svg>
);
export default StudentTestimonial;
