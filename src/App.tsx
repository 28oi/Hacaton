import React from 'react';
import './App.css';
import Header from './components/head';
import Footer from './components/footer';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <FloatingMenu />
      <Footer />
    </div>
  );
};

export default App;

