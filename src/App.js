import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Guide from "./Components/Guide/Guide";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>  
       
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
        <Routes>
          <Route path="/guide" element={<Guide />}  />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}  />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
