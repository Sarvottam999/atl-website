import React from "react";

const StudentTestimonial: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 bg-orange-50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden  cut-shape-testis">
            {/* <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
              alt="Smiling student working on laptop"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>

        {/* Right side - Testimonial */}
        <div className="w-100 space-y-5">
          {/* Header */}
          <h2
            className="font-serif text-2xl md:text-3xl text-gray-800  "
            style={{ fontFamily: "GuthenBloots, serif" }}
          >
            Hear what our students have to say
          </h2>

          {/* Quote */}
          <div className="space-x-50">
            <div className="flex">
            <div className="w-1 bg-gray-400  "></div>
              <p
                className="font-serif text-3xl  ml-10  leading-tight text-gray-900 font-bold "
                style={{ fontFamily: "Recoleta, serif" }}
              >
                It was so nice to get to know my teammates and talk about what
                we're all going through. tbh really helped me deal with my
                anxiety and pressure to please other people. Also, the sessions
                were so real. No BS.
              </p>
            </div>
          </div>

          {/* Attribution */}
          <div className="flex items-center justify-between  ">
            <div className="flex items-center gap-3">
              <svg className="" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" fill="#8C1515" />
                <path
                  d="M14 12h8v8h-8v16h8v-8h8v16h-16v-32zm18 0h8v8h-8v16h8v-8h8v16h-16v-32z"
                  fill="white"
                />
              </svg>
              <div>
                <div className="font-semibold text-gray-900">Stanford</div>
                <div className="text-sm text-gray-600">University</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-orange-500">Jeanne K.</div>
              <div className="text-sm text-gray-600">Student at Stanford</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonial;
