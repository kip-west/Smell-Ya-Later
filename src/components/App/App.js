import React from 'react'
import './App.css'
import SmellKit from '../SmellKit/SmellKit'
import Header from '../Header/Header'
import UserProfile from '../UserProfile/UserProfile'
import Activity from '../Activity/Activity'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <main className="App">
        <BrowserRouter>
          <Header />
          <div className='about-dropdown'>
            <h2 className='about-header'>About</h2>
            <p className='about-text'><b>Our sense of smell plays a vital role in connecting us to our emotions and memories.</b> In the wake of COVID-19, an unprecendented number of people experienced a complete or partial loss of their sense of smell, or anosmia, affecting their mental and emotional health.</p>
            <p className='about-text'>While most people who lose their sense of smell due to COVID-19 seem to regain it over time, there are a number of individuals who report anosmia <i>even after</i> recovering from the virus. A growing body of research indicates that individuals who engage with smell therapy may regain their sense of smell more quickly and completely compared to those who don't.</p>
            <p className='about-text'>Smell Ya Later is a symptom tracking application designed to encourage those experiencing smell loss to engage with treatment and track their progress over time. Users can build a unique Smell Kit, full of items they have around the house. Then, they receive text message prompts to report their sense of smell for each item, allowing Smell Ya Later to keep track of this information over time.</p>
          </div>
          <Route exact path='/' render={() => <SmellKit />} />
          <Route exact path='/user-profile' render={() => <UserProfile />} />
          <Route exact path='/activity' render={() => <Activity />} />
        </BrowserRouter>
    </main>
  );
}

export default App;