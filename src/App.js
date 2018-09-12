import React, { Component } from 'react';

import './css/App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Header  from './components/header/header';
import FooterPage from './components/footer/footer';
import Apppage from './components/apppage/apppage';
// import Main from './main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Apppage />
        <FooterPage/>
      </div>
    );
  }
}

export default App;
