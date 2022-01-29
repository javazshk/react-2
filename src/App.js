import { useEffect } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages';
// import SigninPage from './pages/signin';
import PageNotFound from './components/PageNotFound';
import { Helmet } from 'react-helmet';

function App() {

  useEffect(() => {
    document.title = "TechAlchemy, LLC.,"
  }, []);
  
  return (
    <>
    <Helmet>
    <title>TechAlchemy LLC.</title>
        <meta name="description" content="TechAlchemy is a leading IT firm providing innovative software solutions." />
        <meta name="theme-color" content="#00897B" />
    </Helmet>
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