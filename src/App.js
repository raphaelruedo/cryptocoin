import React, { Component } from 'react';
import './css/App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Header  from './components/header/header';
import AppPage from './components/apppage/apppage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AppPage />
      </div>
    );
  }
}

export default App;
