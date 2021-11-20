import { useEffect } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
// import SigninPage from './pages/signin';
import PageNotFound from './components/PageNotFound';

function App() {

  useEffect(() => {
    document.title = "TechAlchemy, LLC"
  }, []);
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route component={PageNotFound} exact/>
          {/* <Route path="/signin" component={SigninPage} exact/>
           */}
           
        </Switch>
        {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;