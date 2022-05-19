import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import Notfound from "./components/Notfound";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <header>
          <Nav/>
        </header>
        <section className="container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
          </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
