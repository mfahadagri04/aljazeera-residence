import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurVillas from './components/OurVillas';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="home_section">
      <Navbar />
      <Home />
      <OurVillas />
      <Testimonial />
    </div>
  );
}

export default App;