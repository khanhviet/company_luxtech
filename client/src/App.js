import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login'
import Sign from './components/auth/Register'
import Home from './components/pages/Home';
import LoginContext from './contexts/loginContext';
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{
        userData,
        setUserData
      }}>
        <div>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Sign}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
export default App