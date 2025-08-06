import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <div className='font-host-grotesk bg-main-bg'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
      // <Header />
      // <HeroSection/>
      // <BrandsSection/>
      // <AboutSection/>
      // <PorfolioSection/>
      // <PricingSection/>
      // <ExtraSection/>
      // <ExecutivesSection/>
      // <FooterSection/>
