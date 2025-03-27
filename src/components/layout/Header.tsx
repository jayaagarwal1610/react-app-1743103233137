import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();
  
  return (
    <header className={`header ${theme}`}>
      <div className="container header-content">
        <Link to="/" className="logo">React App</Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
      </div>
    </header>
  );
};

export default Header;