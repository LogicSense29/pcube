import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import DearFounder from './pages/DearFounder';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Onboarding from './pages/Onboarding';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Dear Founder event — main landing page */}
        <Route index element={<DearFounder />} />

        {/* Existing site routes preserved under /studio */}
        <Route path='studio' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='onboarding' element={<Onboarding />} />
          <Route path='contact-us' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
