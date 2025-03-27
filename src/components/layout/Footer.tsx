import React from 'react';
import { useAppContext } from '../../context/AppContext';

const Footer: React.FC = () => {
  const { theme } = useAppContext();
  
  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} React Boilerplate</p>
      </div>
    </footer>
  );
};

export default Footer;