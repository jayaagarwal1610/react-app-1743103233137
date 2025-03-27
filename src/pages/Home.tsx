import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to React Boilerplate</h1>
      <p>A simple starting point for your React applications.</p>
      
      <div className="card-grid">
        <Card title="Getting Started">
          <p>This boilerplate includes React Router, Context API for state management, and TypeScript.</p>
          <Button>Learn More</Button>
        </Card>
        
        <Card title="Features">
          <p>Functional components, hooks, and reusable UI components are ready to use.</p>
          <Button variant="secondary">Explore</Button>
        </Card>
      </div>
    </div>
  );
};

export default Home;