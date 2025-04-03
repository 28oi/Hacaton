import React from 'react';
import './App.css';
import Header from './components/head';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;

