import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import HeroSection from './components/Hero/Hero';
import Residences from './components/Residences/Residences';
import Value from './components/Value/Value';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
      </div>
      <Hero/>
      <Residences/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
