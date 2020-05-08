import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import ItemList from './components/ItemContainer/ItemList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <ItemList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
