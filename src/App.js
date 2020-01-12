import React, { Component } from 'react';
import Navbar from 'components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from 'components/routes/Login';
import Signup from 'components/routes/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
