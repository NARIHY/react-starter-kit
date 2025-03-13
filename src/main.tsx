import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import MenuComponent from './components/menu/MenuComponent';
import Home from './views/Home';
import About from './views/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <MenuComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
)
