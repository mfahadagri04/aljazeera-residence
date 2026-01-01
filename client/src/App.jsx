import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoadingFallback from './components/LoadingFallback';
import ErrorBoundary from './components/ErrorBoundary';
import { CurrencyProvider } from './components/CurrencyContext';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home'));
const OurVillas = lazy(() => import('./components/OurVillas'));
const Testimonial = lazy(() => import('./components/Testimonial'));
const Contact = lazy(() => import('./components/Contact'));
const Facilities = lazy(() => import('./components/Facilities'));

function App() {
  return (
    <CurrencyProvider>
      <div className="home_section">
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Home />
            <OurVillas />
            <Facilities />
            <Testimonial />
          </Suspense>
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </CurrencyProvider>
  );
}

export default App;