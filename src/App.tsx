import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Appointments from './components/Appointments';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen font-cairo">
      <Header />
      <Hero />
      <About />
      <Services />
      <Appointments />
      <Articles />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;