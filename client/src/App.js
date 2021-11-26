import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frame from './components/frame';
import Admin from './components/admin_/admin';

class App extends Component {
  render() {
    return (
      <div class="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Frame/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
