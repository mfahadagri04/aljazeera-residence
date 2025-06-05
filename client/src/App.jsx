import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurVillas from './components/OurVillas';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Facilities from './components/Facilities';

function App() {
  return (
    <>
      <div className="home_section">
        <Navbar />
        <Home />
        <OurVillas />
        <Facilities />
        <Testimonial />
      </div>
      <Contact />
    </>
  );
}



export default App;
