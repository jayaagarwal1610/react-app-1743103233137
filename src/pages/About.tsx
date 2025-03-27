import React from 'react';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About This Boilerplate</h1>
      <p>This is a minimal React boilerplate with TypeScript.</p>
      
      <Card>
        <h3>Included Technologies</h3>
        <ul>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>React Router</li>
          <li>Context API for state management</li>
        </ul>
      </Card>
    </div>
  );
};

export default About;