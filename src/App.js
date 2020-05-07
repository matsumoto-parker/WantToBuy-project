import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="main">Hello myApp</h1>
      <Footer />
    </div>
  );
}

export default App;
