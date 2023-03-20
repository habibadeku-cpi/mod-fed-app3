import LocalButton from './Button';
import React from 'react';
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './components/Navbar';
import RemoteHome from './components/RemoteHome';
import People from './components/People';
import Spaces from './components/Spaces';

const App = () => (
  <div
    style={{ border: '1px red solid' }}
    data-e2e="SHARED__REACT_BLOCK"
  >
    <h1>Remote Application - React Version {React.version}</h1>
    {/* <h2>App 2</h2>
    <LocalButton /> */}
    {/* <NavBar></NavBar> */}
    <ErrorBoundary>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/remote2" element={<RemoteHome/>} />
        <Route path="/remote2/people" element={<People />} />
        <Route path="/remote2/spaces" element={<Spaces />} />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary> 
  </div>
);

export default App;
