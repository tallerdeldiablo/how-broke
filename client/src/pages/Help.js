import React from 'react';
import { Link } from 'react-router-dom';

export default function Help() {
  return (
    <main className="help-page" aria-label="Help">
      <Link to="/home">Back to dashboard</Link>
      {/* Add instructions on how the app works here. */}
    </main>
  );
}
