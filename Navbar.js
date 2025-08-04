import React from 'react';
import { Sun, LogOut, User, History, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '12px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      marginBottom: 0
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => navigate('/') }>
          <Sun size={28} color="white" />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>WeatherApp</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          {user && (
            <>
              <button onClick={() => navigate('/search')} style={navBtn}><Search size={18}/> Search</button>
              <button onClick={() => navigate('/history')} style={navBtn}><History size={18}/> History</button>
              <button onClick={() => navigate('/profile')} style={navBtn}><User size={18}/> Profile</button>
              <span style={{ fontWeight: 500, marginLeft: 10 }}>Hi, {user.username}</span>
              <button onClick={logout} style={{...navBtn, background: '#e74c3c', color: 'white'}}><LogOut size={18}/> Logout</button>
            </>
          )}
          {!user && (
            <>
              <button onClick={() => navigate('/login')} style={navBtn}>Login</button>
              <button onClick={() => navigate('/register')} style={navBtn}>Register</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const navBtn = {
  background: 'rgba(255,255,255,0.12)',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  padding: '8px 16px',
  fontWeight: 500,
  fontSize: 15,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  transition: 'background 0.2s',
};

export default Navbar; 