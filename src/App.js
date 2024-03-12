
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';

import './App.css';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
/*import Testmonials from './Components/Testmonials/Testmonials';*/




function App() {
  return (
    <div className='app-container'>
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Projects/>
       <Contact />
       <Footer/>
    </div>
  );
}

export default App;
