import React from 'react';

const MentalHealthPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-clip">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-16">
          <h1 className="text-2xl font-serif   mb-12" style={{ fontFamily: 'GuthenBloots, serif' }}>
            One platform, multiple touchpoints.
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-4xl font-bold leading-tight mb-8" style={{ fontFamily: 'Recoleta, serif' }}>
              We support students, no matter what they're dealing with.
            </h2>

            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Personalized, therapist-led support groups
                </h3>
                <p className="text-gray-600 mb-3">
                  Weekly virtual groups, consisting of 5-10 students and a licensed clinician, custom-tailored to each student's needs, lived experiences, and personality type.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li className="flex gap-2">
                    <span className="text-black">•</span>
                    <span>
                      Our program, rooted in the latest evidence-based practices, helps students build an inclusive community that understands the complexity of their experiences and supports them as they move forward.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  1:1 check-ins with culturally-competent therapists
                </h3>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Real-time SMS support
                </h3>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Interactive mental health resource library
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Video Interface Mockup */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-green-400     cut-shape" 
            >
                <img rel="preload" data-screen="3" src="https://tbh.studiovoila.com/img/content/touchpoints/touchpoints-04.png" ></img>



            </div>
            
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 flex flex-wrap justify-center items-center gap-16 text-center">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">Up to</span>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">10</span>
              <span className="text-5xl font-serif italic" style={{ fontFamily: 'GuthenBloots, serif' }}>students</span>
            </div>
          </div>

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100" preserveAspectRatio="xMidYMid meet" ><defs><clipPath id="__lottie_element_570"><rect width="200" height="100" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_570)"><g transform="matrix(1,0,0,1,100,50)" opacity="1" ><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(35,32,31)" stroke-opacity="1" stroke-width="6" d=" M-37.625,-2.125 C-37.625,-2.125 -21.875,17.25 -5,1.25 C6.894999980926514,-10.029000282287598 -7.375,-23.875 -13.75,-18.625 C-20.249000549316406,-13.27299976348877 -13.437000274658203,3.187000036239624 19.125,10.125"></path></g></g><g transform="matrix(1,0,0,1,-277.42498779296875,-312.15399169921875)" opacity="1" ><g opacity="1" transform="matrix(1,0,0,1,404.2590026855469,371.79400634765625)"><path fill="rgb(35,32,31)" fill-opacity="1" d=" M-5.640999794006348,13.711000442504883 C-8.137999534606934,13.50100040435791 -11.954999923706055,14.670999526977539 -13.197999954223633,11.758999824523926 C-13.760000228881836,10.029000282287598 -13.053000450134277,9.277999877929688 -11.602999687194824,8.838000297546387 C-6.425000190734863,6.995999813079834 -0.7210000157356262,7.910999774932861 4.480000019073486,6.571000099182129 C2.056999921798706,1.343999981880188 -1.6519999504089355,-3.325000047683716 -4.51800012588501,-8.359999656677246 C-7.379000186920166,-13.170000076293945 -1.059999942779541,-16.202999114990234 1.4490000009536743,-11.201000213623047 C5.120999813079834,-5.406000137329102 8.847000122070312,0.35600000619888306 12.467000007629395,6.184000015258789 C13.951000213623047,8.572999954223633 13.612000465393066,11.02400016784668 11.706999778747559,12.204000473022461 C10.869999885559082,12.722000122070312 9.795999526977539,13.050999641418457 8.8100004196167,13.105999946594238 C3.996000051498413,13.37399959564209 -0.8240000009536743,13.522000312805176 -5.640999794006348,13.711000442504883z"></path></g></g></g></svg>

          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">Meet</span>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">Once</span>
              <span className="text-5xl font-serif italic" style={{ fontFamily: 'GuthenBloots, serif' }}>/ week</span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" width="100" height="50" preserveAspectRatio="xMidYMid meet" 
          ><defs><clipPath id="__lottie_element_578"><rect width="100" height="50" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_578)"><g transform="matrix(1,0,0,1,50,25)" opacity="1"  ><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(35,32,31)" stroke-opacity="1" stroke-width="7" d=" M-34.5,1.875 C-21.5,-12.125 5.75,-17.25 22.125,-0.75"></path></g></g><g transform="matrix(1,0,0,1,-337.57598876953125,-252.72198486328125)" opacity="1"  ><g opacity="1" transform="matrix(1,0,0,1,408.9939880371094,277.72198486328125)"><path fill="rgb(35,32,31)" fill-opacity="1" d=" M8.85200023651123,8.163999557495117 C8.312000274658203,4.376999855041504 7.809000015258789,1.13100004196167 7.034999847412109,-2.494999885559082 C6.7820000648498535,-6.301000118255615 3.25,-12.255000114440918 6.714000225067139,-15.076000213623047 C8.784000396728516,-16.39900016784668 11.159000396728516,-14.906000137329102 11.682000160217285,-13.293999671936035 C13.956999778747559,-5.019999980926514 15.559000015258789,3.4830000400543213 15.888999938964844,12.079000473022461 C16.05699920654297,14.548999786376953 13.260000228881836,15.925999641418457 11.277999877929688,15.51200008392334 C7.499000072479248,14.722999572753906 -9.432000160217285,10.982999801635742 -14.097000122070312,9.87399959564209 C-16.30900001525879,9.50100040435791 -16.6200008392334,5.9120001792907715 -14.25100040435791,5.2769999504089355 C-6.449999809265137,3.5209999084472656 1.0379999876022339,7.486999988555908 8.85200023651123,8.163999557495117z"></path></g></g></g></svg>

          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 mb-2">For</span>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">60</span>
              <span className="text-5xl font-serif italic" style={{ fontFamily: 'GuthenBloots, serif' }}>min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthPlatform;