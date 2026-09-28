import React from 'react';
import Auth from '../../utils/auth';
import './style.css';

export default function Display2() {
  return (
    <header className="overview-container">
      <p>Hello, {Auth.getProfile().data.username}</p>
      <h1>Financial Overview</h1>
      <span>Track your expenses in one place.</span>
    </header>
  );
}
