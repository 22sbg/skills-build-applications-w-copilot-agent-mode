
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<div className="card"><div className="card-body"><Activities /></div></div>} />
          <Route path="/leaderboard" element={<div className="card"><div className="card-body"><Leaderboard /></div></div>} />
          <Route path="/teams" element={<div className="card"><div className="card-body"><Teams /></div></div>} />
          <Route path="/users" element={<div className="card"><div className="card-body"><Users /></div></div>} />
          <Route path="/workouts" element={<div className="card"><div className="card-body"><Workouts /></div></div>} />
          <Route path="/" element={<div className="text-center mt-5"><h2 className="display-5">Welcome to <span className="text-primary">OctoFit Tracker</span>!</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
