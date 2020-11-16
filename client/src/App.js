import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login'
import Sign from './components/auth/Register'
import Home from './components/pages/Home';
import LoginContextProvider from './contexts/LoginContext';
function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider >
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Sign}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </LoginContextProvider>
    </BrowserRouter>
  );
}
export default App