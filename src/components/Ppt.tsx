import React, { useState } from 'react';
import { Lightbulb, PlayCircle, ExternalLink, ArrowLeft, BookOpen, Grid, Eye, Target, Heart, Zap, Award } from 'lucide-react';
import { useRouter } from '../contexts/RouterContext';
import { useAuth } from '../contexts/AuthContext';
import Footer from './homepage_widgets/Footer';

interface ATLJourneyWebsiteProps {
  }
const ATLPresentationsPage: React.FC<ATLJourneyWebsiteProps> = () => {
    const { logout } = useAuth();
    const { navigate } = useRouter();
  const [selectedPresentation, setSelectedPresentation] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'index' | 'viewer'>('index');

  // Array of presentations
  const presentations = [
    {
      id: '1',
      title: 'Introduction to ATL Innovation',
      description: 'Learn about the ATL lab, its mission, and how it transforms students into innovators',
      driveLink: 'https://docs.google.com/presentation/d/1q_gYifH85NCxmwc0PmvPsO1qC44aMGW5j4xhY9aoXrY/edit?slide=id.g3b3daf3ddbb_0_0#slide=id.g3b3daf3ddbb_0_0',
      embedLink: 'https://docs.google.com/presentation/d/1q_gYifH85NCxmwc0PmvPsO1qC44aMGW5j4xhY9aoXrY/embed?start=false&loop=false&delayms=3000',
      category: 'Introduction',
      duration: '15 slides',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      id: '2',
      title: 'Robotics Workshop Series',
      description: 'Step-by-step guide to building your first robot with Arduino',
      driveLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_2/edit',
      embedLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_2/embed?start=false&loop=false&delayms=3000',
      category: 'Workshops',
      duration: '25 slides',
      icon: Target,
      color: 'purple'
    },
    {
      id: '3',
      title: 'IoT Projects Showcase',
      description: 'Amazing IoT projects created by our students',
      driveLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_3/edit',
      embedLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_3/embed?start=false&loop=false&delayms=3000',
      category: 'Projects',
      duration: '20 slides',
      icon: Zap,
      color: 'green'
    },
    {
      id: '4',
      title: '3D Printing Fundamentals',
      description: 'From design to print - master the art of 3D printing',
      driveLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_4/edit',
      embedLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_4/embed?start=false&loop=false&delayms=3000',
      category: 'Workshops',
      duration: '18 slides',
      icon: Heart,
      color: 'orange'
    },
    {
      id: '5',
      title: 'AI & Machine Learning Basics',
      description: 'Understanding artificial intelligence and its applications',
      driveLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_5/edit',
      embedLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_5/embed?start=false&loop=false&delayms=3000',
      category: 'Technology',
      duration: '30 slides',
      icon: Award,
      color: 'red'
    },
    {
      id: '6',
      title: 'Design Thinking Process',
      description: 'Learn to solve problems like an innovator',
      driveLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_6/edit',
      embedLink: 'https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_6/embed?start=false&loop=false&delayms=3000',
      category: 'Methodology',
      duration: '22 slides',
      icon: BookOpen,
      color: 'pink'
    }
  ];

  const categories = ['All', ...Array.from(new Set(presentations.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPresentations = selectedCategory === 'All' 
    ? presentations 
    : presentations.filter(p => p.category === selectedCategory);

  const handleViewPresentation = (presentation: typeof presentations[0]) => {
    setSelectedPresentation(presentation.embedLink);
    setViewMode('viewer');
  };

  const handleBackToIndex = () => {
    setSelectedPresentation(null);
    setViewMode('index');
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; hover: string; badge: string } } = {
      blue: { bg: 'bg-blue-400', text: 'text-blue-600', hover: 'hover:bg-blue-50', badge: 'bg-blue-100' },
      purple: { bg: 'bg-purple-400', text: 'text-purple-600', hover: 'hover:bg-purple-50', badge: 'bg-purple-100' },
      green: { bg: 'bg-green-400', text: 'text-green-600', hover: 'hover:bg-green-50', badge: 'bg-green-100' },
      orange: { bg: 'bg-orange-400', text: 'text-orange-600', hover: 'hover:bg-orange-50', badge: 'bg-orange-100' },
      red: { bg: 'bg-red-400', text: 'text-red-600', hover: 'hover:bg-red-50', badge: 'bg-red-100' },
      pink: { bg: 'bg-pink-400', text: 'text-pink-600', hover: 'hover:bg-pink-50', badge: 'bg-pink-100' },
    };
    return colors[color] || colors.blue;
  };

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
              <span className="font-bold text-xl">ATL Presentations</span>
              <p className="text-xs text-blue-100">Knowledge Library</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('home')}
              className="bg-yellow-400 text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all"
            >
              Back to Home
            </button>
            <button 
              onClick={logout}
              className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {viewMode === 'index' ? (
        // INDEX VIEW
        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 px-6 py-3 rounded-full text-sm font-semibold text-blue-600 mb-6">
                Chapter: Learning Resources
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
                Explore Our
                <span className="text-blue-600 block mt-2">Presentation Library</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Access all our workshops, tutorials, and project showcases. Where knowledge meets innovation and ideas come alive.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-blue-600 mb-2">{presentations.length}+</div>
                <p className="text-lg font-semibold text-gray-800">Presentations</p>
                <p className="text-gray-600 text-sm">Ready to explore</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-green-600 mb-2">{categories.length - 1}</div>
                <p className="text-lg font-semibold text-gray-800">Categories</p>
                <p className="text-gray-600 text-sm">Diverse topics covered</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
                <p className="text-lg font-semibold text-gray-800">Students Reached</p>
                <p className="text-gray-600 text-sm">Learning together</p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Presentations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPresentations.map((presentation) => {
                const Icon = presentation.icon;
                const colors = getColorClasses(presentation.color);
                
                return (
                  <div
                    key={presentation.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    {/* Icon Header */}
                    <div className={`${colors.bg} h-48 flex items-center justify-center relative`}>
                      <Icon className="w-24 h-24 text-white" />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg">
                        {presentation.duration}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-yellow-400 px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-lg">
                        {presentation.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                        {presentation.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {presentation.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleViewPresentation(presentation)}
                          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
                        >
                          <PlayCircle className="w-5 h-5" />
                          View Slides
                        </button>
                        <a
                          href={presentation.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-800 px-4 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredPresentations.length === 0 && (
              <div className="text-center py-16">
                <Grid className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500 font-semibold">No presentations found in this category</p>
                <p className="text-gray-400 mt-2">Try selecting a different category</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // VIEWER MODE
        <div className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackToIndex}
              className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Library
            </button>

            {/* Presentation Viewer */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8" />
                  <div>
                    <h2 className="text-2xl font-bold">Presentation Viewer</h2>
                    <p className="text-blue-100 text-sm">Use arrow keys or click to navigate slides</p>
                  </div>
                </div>
              </div>

              {/* Embedded Presentation */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={selectedPresentation || ''}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="Presentation Viewer"
                />
              </div>

              {/* Viewer Controls */}
              <div className="p-6 bg-orange-50">
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={presentations.find(p => p.embedLink === selectedPresentation)?.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open in Google Drive
                  </a>
                  <button
                    onClick={handleBackToIndex}
                    className="flex items-center gap-2 bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all shadow-lg"
                  >
                    <Grid className="w-5 h-5" />
                    Browse More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

<Footer/>

    </div>
  );
};

export default ATLPresentationsPage;