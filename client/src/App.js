import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;