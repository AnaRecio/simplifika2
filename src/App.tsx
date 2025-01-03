import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TallyScript from './components/TallyScript';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-secondary">
        <Header />
        <main className="pt-16">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <TallyScript />
      </div>
    </LanguageProvider>
  );
}

export default App;