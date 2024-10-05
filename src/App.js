import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Importance from './components/Importance/Importance';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Importance/>
        <Footer/>
      
    </div>
  );
}

export default App;
