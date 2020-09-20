import React, { Component } from 'react'
import './App.css'
import SmellKit from '../SmellKit/SmellKit'
import Header from '../Header/Header'
import UserProfile from '../UserProfile/UserProfile'
import Activity from '../Activity/Activity'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        phoneNumber: ''
      }
    }
  }

  updateUserInformation = (user) => {
    console.log(user)
    this.setState ( { user: user })
  }

  render() {
    return (
      <main className="App">
          <BrowserRouter>
            <Header />
            <Route exact path='/' render={() => <SmellKit user={this.state.user} />} />
            <Route exact path='/user-profile' render={() => <UserProfile updateProfile={this.updateUserInformation} user={this.state.user} />} />
            <Route exact path='/activity' render={() => <Activity />} />
          </BrowserRouter>
      </main>
    )
  }
}

export default App;