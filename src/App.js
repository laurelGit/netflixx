import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={ <Home /> } />
        </Routes>
      </Router>
    </>
  );
}