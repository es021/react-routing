import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './common/main.component.jsx'

const HomePage = () => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
);


const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

render(<App />, document.getElementById('container'));