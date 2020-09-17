import React from 'react';
import SmellKit from './components/SmellKit/SmellKit'
import Header from './components/Header/Header'
import Router from 'react-router-dom'

function App() {
  return (
    <main className="App">
        <Header />
        <SmellKit />
    </main>
  );
}

export default App;
