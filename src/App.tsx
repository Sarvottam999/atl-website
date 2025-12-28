import { useState } from 'react';
import ATLPresentationsPage from './components/Ppt';
import ATLJourneyWebsite from './components/SlideViewer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'presentations'>('home');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'home' ? (
        <ATLJourneyWebsite onNavigate={() => setCurrentPage('presentations')} />
      ) : (
        <ATLPresentationsPage onNavigate={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;