import ATLPresentationsPage from './components/Ppt';
import ATLJourneyWebsite from './components/SlideViewer';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { RouterProvider, useRouter } from './contexts/RouterContext';
import LoginPage from './pages/LoginPage';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const { currentPage, navigate } = useRouter();

  // Redirect to home after logout
  if (!isAuthenticated && currentPage !== 'home' && currentPage !== 'login') {
    navigate('home');
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-600">
        <div className="text-white text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  // Route rendering
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <ATLJourneyWebsite />;
      case 'presentations':
        return isAuthenticated ? <ATLPresentationsPage /> : <ATLJourneyWebsite />;
      case 'login':
        return isAuthenticated ? <ATLJourneyWebsite /> : <LoginPage />;
      default:
        return <ATLJourneyWebsite />;
    }
  };

  return <div className="min-h-screen bg-white">{renderPage()}</div>;
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </AuthProvider>
  );
}

export default App;