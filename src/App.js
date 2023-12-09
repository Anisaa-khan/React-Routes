import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './component/Footer';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Service" element={<Service />} />

   </Routes>
   <Footer/>
   </BrowserRouter> 
  );
}

export default App;
