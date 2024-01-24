import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AnimatedRoutes from './routes/AnimatedRoutes';
import { MyAppProvider } from './context/Context';
function App() {
  return (
    <MyAppProvider>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </MyAppProvider>
  );
}

export default App;
