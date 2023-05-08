import React from 'react';
import Index from './components/index';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Doubts from './components/doubts/doubts';
import Register from './components/register/register';
import Terms from './components/terms/terms';
import Tracking from './components/tracking/tracking';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doubts" element={<Doubts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      <Index/>
    </div>
  )
}
