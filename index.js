import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Safety from './Safety';

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/"> Home  </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact</Link>
        <Link to="/safety"> Safety </Link>
        <Link to="/guides"> Guides </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety" element={<Safety />} /> 
    {/* <Route path="/guides" element={<Guides />} /> */}

      </Routes>
      <div className="footer">
        <p>&copy; 2023 Hunting Store</p>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
