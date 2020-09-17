import React from 'react';
import './App.css'
import SmellKit from '../SmellKit/SmellKit'
import Header from '../Header/Header'
import UserProfile from '../UserProfile/UserProfile'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <main className="App">
        <BrowserRouter>
          <Header />
          <Route exact path='/' render={() => <SmellKit />}/>
          <Route exact path='/user-profile' render={() => <UserProfile />} />
          <Route exact path='/activity' render={() => <h1>Recent Activity!</h1>} />
        </BrowserRouter>
    </main>
  );
}

export default App;