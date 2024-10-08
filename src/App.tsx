import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/navBar';
import Homepage from './components/homePage';
import TestimonialsPage from './components/TestimonialsPage';
import UserComments from './components/UserComments';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage'; // Page d'authentification
import AppHome from './components/AppHome'; // Page d'accueil de l'application après connexion

function App() {
  return (
    <ChakraProvider>
      <Router>
        <AppContent />
      </Router>
    </ChakraProvider>
  );
}

function AppContent() {
  const location = useLocation();

  // Définir les routes où la Navbar ne doit pas être affichée
  const hideNavbar =
    location.pathname === '/mon-espace' || location.pathname === '/home';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <TestimonialsPage />
              <UserComments />
              <PartnersSection />
              <Footer />
            </>
          }
        />
        <Route path="/mon-espace" element={<AuthPage />} />
        <Route path="/home" element={<AppHome />} />
      </Routes>
    </>
  );
}

export default App;
