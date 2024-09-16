import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HeroSection from './components/section/HeroSection'
import BenefitsSection from './components/section/BenefitsSection'
import TumblerGrid from './components/section/TumblerGrid'
import Footer from './components/section/Footer'
import ProductDetail from './components/section/ProuductDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <section id='home'>
              <HeroSection />
            </section>
            <section>
              <BenefitsSection />
            </section>
            <section id='list'>
              <TumblerGrid />
            </section>
          </>
        } />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App