import './App.css';
import Analytics from './Component/Analytics';
import Cards from './Component/Cards';
import Footer from './Component/Footer';
import HeroSection from './Component/HeroSection';
import Navbar from './Component/Navbar';
import NewLetter from './Component/NewLetter';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Analytics/>
      <NewLetter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
