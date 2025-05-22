import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurVillas from './components/OurVillas';

function App() {
  return (
    <div className="home_section">
      <Navbar />
      <Home />
      <OurVillas />
    </div>
  );
}

export default App;