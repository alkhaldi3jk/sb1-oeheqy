import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Football } from 'lucide-react'; // Changed from SoccerBall to Football
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fields from './pages/Fields';
import Matches from './pages/Matches';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Football className="w-8 h-8 text-emerald-600" />
                <h1 className="text-2xl font-bold text-gray-900">FootballHub</h1>
              </div>
            </header>
            
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fields" element={<Fields />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
          <Navbar />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;