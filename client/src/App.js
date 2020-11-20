import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login'
import Sign from './components/auth/Register'
import Home from './components/pages/home/Home';
import LoginContextProvider from './contexts/loginContext';
import './App.css'
import User from './components/pages/User';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Sign}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App