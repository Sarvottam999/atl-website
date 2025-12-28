import React, { useState } from 'react';
import { Lightbulb, Users, Rocket, Brain, Code, Wrench, Award, Heart, Sparkles, Target, Zap, BookOpen, Gift, ArrowRight } from 'lucide-react';

 
interface ATLJourneyWebsiteProps {
    onNavigate: () => void;
  }
  
  const ATLJourneyWebsite: React.FC<ATLJourneyWebsiteProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0);
const [currentView, setCurrentView] = useState('home'); // 'home', 'presentations', 'viewer'
const [selectedPresentation, setSelectedPresentation] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="bg-blue-600 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <span className="font-bold text-xl">ATL Innovation</span>
              <p className="text-xs text-blue-100">Where Ideas Come Alive</p>
            </div>
          </div>
          <button 
  onClick={onNavigate}
  className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all"
>
  View Presentations
</button>
        </div>
      </header>

      {/* CHAPTER 1: THE INVITATION - Hero Section */}
      <section 
        className="relative py-32 px-6 overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: "url('1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated decorative elements */}
        {/* <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div> */}
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* <div className="text-center mb-12">
            <div className="inline-block bg-white px-6 py-3 rounded-full text-sm font-bold text-purple-600 mb-6 shadow-2xl backdrop-blur-sm">
              Chapter 1: The Invitation ✨
            </div>
          </div>
           */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                Every Great
                <span className="text-yellow-300 block mt-2"> Innovation</span>
                Starts With
                <span className="text-orange-400 block mt-2"> Curiosity</span>
              </h1>
              
              <p className="text-2xl text-white mb-8 leading-relaxed drop-shadow-lg font-medium">
                Imagine walking into a room where your wildest ideas aren't just dreams—they become reality. Where that "what if?" becomes "I built it!"
              </p>
              
              {/* <div className="bg-white bg-opacity-95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-transform">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-lg text-gray-800 italic leading-relaxed flex-1">
                    "I remember my first day at the ATL lab. I was nervous, excited, and had no idea that this place would change everything I thought I knew about learning..."
                  </p>
                </div>
                <p className="font-bold text-blue-600 text-lg">- Every ATL Student's Story</p>
              </div> */}
              
              <div className="flex gap-4 pt-4">
                <button className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-110 shadow-2xl">
                  Begin Your Journey →
                </button>
                {/* <button className="bg-white bg-opacity-20 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-30 transition-all shadow-2xl">
                  Watch Story
                </button> */}
              </div>
            </div>
            
            <div className="relative ">
              {/* <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white border-opacity-30 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-white bg-opacity-20 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">500+ Students</p>
                      <p className="text-gray-200 text-sm">Transformed into Innovators</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white bg-opacity-20 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="bg-blue-400 p-3 rounded-full">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">150+ Projects</p>
                      <p className="text-gray-200 text-sm">Ideas Turned into Reality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-white bg-opacity-20 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="bg-green-400 p-3 rounded-full">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">25+ Awards</p>
                      <p className="text-gray-200 text-sm">Excellence Recognized</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="bg-yellow-400 inline-flex items-center gap-2 px-6 py-3 rounded-full animate-bounce">
                    <ArrowRight className="w-6 h-6 text-gray-800" />
                    <span className="font-bold text-gray-800">Scroll to Explore</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 2: MEET YOUR GUIDE */}
      {/* <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Chapter 2: Meet Your Guide
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">I'm Not Just a Teacher,<br />I'm Your Innovation Partner</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 rounded-3xl h-96 flex items-center justify-center p-8 relative overflow-hidden">
              <Users className="w-48 h-48 text-blue-300 absolute opacity-20" />
              <div className="relative z-10 text-center">
                <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-xl">
                  <Heart className="w-16 h-16 text-red-500" />
                </div>
                <p className="text-2xl font-bold text-blue-600">ATL Facilitator</p>
                <p className="text-gray-600">Dream Enabler</p>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-yellow-100 p-6 rounded-2xl border-l-4 border-yellow-400">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">My Promise to You</h3>
                  <p className="text-gray-700">I won't give you answers. I'll give you the tools to discover them yourself. Because the best learning happens when YOU are the creator.</p>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl border-l-4 border-green-400">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">What Drives Me</h3>
                  <p className="text-gray-700">That moment when a student's eyes light up because their code finally worked, or their robot moved for the first time—that's why I do this.</p>
                </div>
                <div className="bg-purple-100 p-6 rounded-2xl border-l-4 border-purple-400">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">My Belief</h3>
                  <p className="text-gray-700">Every student is an innovator. Some just haven't discovered it yet. And that's where our journey together begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CHAPTER 3: THE MAGICAL LAB */}
      <section className="py-24 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-200 px-4 py-2 rounded-full text-sm font-semibold text-orange-600 mb-4">
              Chapter 3: Enter The Lab
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">This Isn't a Classroom.<br />It's a <span className="text-orange-600">Dream Workshop</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Step inside where imagination meets machinery, where ideas transform into inventions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Code className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">The Creation Zone</h3>
              <p className="text-gray-600 text-center mb-4">3D printers humming, circuits buzzing, robots moving—this is where your digital designs become physical reality.</p>
              <div className="bg-blue-50 p-3 rounded-xl">
                <p className="text-sm text-blue-600 font-semibold">Equipment: 3D Printers, Laser Cutters, Electronics Workstations</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">The Think Tank</h3>
              <p className="text-gray-600 text-center mb-4">Whiteboards filled with sketches, brainstorming sessions, and those "aha!" moments that change everything.</p>
              <div className="bg-purple-50 p-3 rounded-xl">
                <p className="text-sm text-purple-600 font-semibold">Tools: Design Thinking Kits, Prototyping Materials, Collaboration Spaces</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Rocket className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">The Launch Pad</h3>
              <p className="text-gray-600 text-center mb-4">Where finished projects take flight—testing, showcasing, and presenting to the world.</p>
              <div className="bg-green-50 p-3 rounded-xl">
                <p className="text-sm text-green-600 font-semibold">Features: Presentation Area, Testing Ground, Exhibition Space</p>
              </div>
            </div>
          </div>

          {/* <div className="bg-orange-400 rounded-3xl p-12 text-center text-white">
            <Wrench className="w-24 h-24 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Toolkit of Wonders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">Arduino Kits</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">Raspberry Pi</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">IoT Sensors</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">Robotics Sets</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">VR Headsets</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">Drones</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">AI Software</div>
              <div className="bg-white text-orange-600 py-3 px-4 rounded-xl font-bold">CAD Tools</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* CHAPTER 4: THE ADVENTURE BEGINS */}
      {/* <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-200 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Chapter 4: Your Learning Adventure
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">How We Turn <span className="text-blue-600">"I Can't"</span><br />Into <span className="text-green-600">"I Did It!"</span></h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Spark of Curiosity</h3>
                <p className="text-gray-600 text-lg">It starts with a question: "What if we could...?" Maybe it's about solving a problem at home, school, or in your community. That's your project seed.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="bg-blue-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Design & Dream</h3>
                <p className="text-gray-600 text-lg">We sketch, brainstorm, and plan together. No idea is too wild. We learn that failure is just another word for "trying a different way."</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="bg-green-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Build & Break (It's OK!)</h3>
                <p className="text-gray-600 text-lg">Your hands get dirty. Code doesn't work the first time. Circuits need adjusting. But with each attempt, you're learning more than any textbook could teach.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="bg-purple-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">The Magic Moment</h3>
                <p className="text-gray-600 text-lg">It works! Your robot moves, your app runs, your invention solves the problem. This is the moment everything clicks.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg flex items-start gap-6">
              <div className="bg-orange-400 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">5</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Share & Inspire</h3>
                <p className="text-gray-600 text-lg">You present your project to others, participate in competitions, and inspire the next innovator. Because great ideas deserve to be shared.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CHAPTER 5: STUDENT STORIES */}
      <section className="py-24 px-6 bg-purple-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-200 px-4 py-2 rounded-full text-sm font-semibold text-purple-600 mb-4">
              Chapter 5: Their Stories, Your Inspiration
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Real Students.<br />Real Innovations.<br/><span className="text-purple-600">Real Impact.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-blue-400 h-48 rounded-2xl mb-6 flex items-center justify-center">
                <Target className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Waste Segregator</h3>
              <p className="text-gray-600 mb-4">Students built an IoT-based system that automatically sorts waste using sensors and machine learning.</p>
              <div className="bg-green-100 px-4 py-2 rounded-full inline-block">
                <span className="text-green-600 font-semibold text-sm">🏆 National Award</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-green-400 h-48 rounded-2xl mb-6 flex items-center justify-center">
                <Heart className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Health Monitor Band</h3>
              <p className="text-gray-600 mb-4">A wearable device for elderly people that monitors vitals and sends alerts to family members.</p>
              <div className="bg-blue-100 px-4 py-2 rounded-full inline-block">
                <span className="text-blue-600 font-semibold text-sm">🎯 ATL Marathon Winner</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="bg-yellow-400 h-48 rounded-2xl mb-6 flex items-center justify-center">
                <Zap className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Solar-Powered Irrigation</h3>
              <p className="text-gray-600 mb-4">An automated irrigation system for farmers using solar energy and soil moisture sensors.</p>
              <div className="bg-purple-100 px-4 py-2 rounded-full inline-block">
                <span className="text-purple-600 font-semibold text-sm">🌟 State Level Recognition</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="h-32 bg-blue-400 rounded-2xl"></div>
              <div className="h-32 bg-green-400 rounded-2xl"></div>
              <div className="h-32 bg-purple-400 rounded-2xl"></div>
              <div className="h-32 bg-yellow-400 rounded-2xl"></div>
              <div className="h-32 bg-orange-400 rounded-2xl"></div>
              <div className="h-32 bg-pink-400 rounded-2xl"></div>
              <div className="h-32 bg-red-400 rounded-2xl"></div>
              <div className="h-32 bg-indigo-400 rounded-2xl"></div>
            </div>
            <p className="text-2xl font-bold text-gray-800">150+ Projects & Counting...</p>
            <p className="text-gray-600 mt-2">Each one tells a story of curiosity, perseverance, and innovation</p>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: THE VICTORIES */}
      {/* <section className="py-24 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-200 px-4 py-2 rounded-full text-sm font-semibold text-yellow-600 mb-4">
              Chapter 6: Celebrating Success
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">When Hard Work<br/>Meets <span className="text-yellow-600">Recognition</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-blue-600 mb-4">500+</div>
              <p className="text-xl font-semibold text-gray-800 mb-2">Young Innovators</p>
              <p className="text-gray-600">Trained and mentored in ATL programs</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-green-600 mb-4">150+</div>
              <p className="text-xl font-semibold text-gray-800 mb-2">Working Prototypes</p>
              <p className="text-gray-600">From idea to reality</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-purple-600 mb-4">25+</div>
              <p className="text-xl font-semibold text-gray-800 mb-2">Awards Won</p>
              <p className="text-gray-600">At district, state, and national levels</p>
            </div>
          </div>

          <div className="bg-yellow-400 rounded-3xl p-12">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <Award className="w-20 h-20 text-white" />
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Hall of Fame</h3>
                <p className="text-white text-lg">ATL Marathon • Smart India Hackathon • Innovation Challenge</p>
              </div>
              <Award className="w-20 h-20 text-white" />
            </div>
          </div>
        </div>
      </section> */}

      {/* CHAPTER 7: WHAT WE EXPLORE */}
      <section className="py-24 px-6 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Chapter 7: The Infinite Playground
            </div>
            <h2 className="text-5xl font-bold mb-4">Technologies We Master Together</h2>
            <p className="text-xl text-blue-100">From coding to circuits, from apps to automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Code className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Programming & Coding</h3>
              <p className="text-gray-600 mb-4">Python, JavaScript, Arduino IDE, App Development</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">C++</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Scratch</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Rocket className="w-16 h-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Robotics & IoT</h3>
              <p className="text-gray-600 mb-4">Build robots, smart devices, and connected systems</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Arduino</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Raspberry Pi</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Sensors</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Brain className="w-16 h-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Teach machines to learn and make smart decisions</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">ML Models</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Image Recognition</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">ChatBots</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Zap className="w-16 h-16 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Electronics & Circuits</h3>
              <p className="text-gray-600 mb-4">Understanding the magic behind every device</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">PCB Design</span>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Soldering</span>
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Circuits</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Gift className="w-16 h-16 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">3D Design & Printing</h3>
              <p className="text-gray-600 mb-4">Design in digital, create in physical</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">TinkerCAD</span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Fusion 360</span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">3D Printing</span>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-3xl">
              <Target className="w-16 h-16 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Design Thinking</h3>
              <p className="text-gray-600 mb-4">Problem-solving like a pro innovator</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Empathy</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Ideation</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Prototyping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 8: WORKSHOPS & EVENTS */}
      {/* <section className="py-24 px-6 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-200 px-4 py-2 rounded-full text-sm font-semibold text-green-600 mb-4">
              Chapter 8: The Learning Never Stops
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Workshops, Events &<br/><span className="text-green-600">Endless Possibilities</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <BookOpen className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekly Innovation Sessions</h3>
              <p className="text-gray-600 mb-4">Every week, we dive into new technologies, tackle new challenges, and discover new ways to create.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Monday: Robotics Hour
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Wednesday: Coding Club
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Friday: Project Showcase
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Sparkles className="w-16 h-16 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Events & Competitions</h3>
              <p className="text-gray-600 mb-4">We participate in hackathons, innovation challenges, and showcase our work to the world.</p>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <p className="font-semibold text-purple-600">ATL Marathon Participation</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <p className="font-semibold text-blue-600">Science Exhibition Leadership</p>
                </div>
                <div className="bg-green-50 p-3 rounded-xl">
                  <p className="font-semibold text-green-600">Innovation Bootcamps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CHAPTER 9: YOUR CALL TO ACTION */}
      {/* <section className="py-24 px-6 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Chapter 9: Your Turn
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Write<br/>Your Innovation Story?
          </h2>
          <p className="text-2xl mb-8 text-purple-100">
            Every innovator started exactly where you are now—curious and ready to explore.
          </p>
          <p className="text-xl mb-12 text-purple-100 max-w-2xl mx-auto">
            The lab doors are open. The tools are ready. The only question is: What will YOU create?
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl">
              Join Our Innovation Journey
            </button>
            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl">
              Schedule a Lab Visit
            </button>
          </div>
        </div>
      </section> */}

      {/* EPILOGUE: STAY CONNECTED */}
      <section className="py-16 px-6 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 p-2 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">ATL Innovation</h3>
                  <p className="text-xs text-gray-400">Dream. Create. Innovate.</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Where every student is an inventor waiting to be discovered.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About the Lab</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Projects</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Achievements</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Get Involved</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Join a Workshop</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Visit the Lab</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Collaborate</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Me</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">
                Have questions? Want to collaborate? Let's talk innovation!
              </p>
              <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-all">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 ATL Innovation Lab • Empowering the Next Generation of Innovators
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Part of the Atal Innovation Mission • Government of India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATLJourneyWebsite;