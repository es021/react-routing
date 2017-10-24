import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, NavLink} from 'react-router-dom'

import HomePage from './page/home';
import AboutPage from './page/about';
import UserPage from './page/user';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
      </ul>
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/user/:id" component={UserPage} />
    </main>
  </div>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));