import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>Welcome to K&M Exports</h1>
    <p>Professional Avocado Exporters from Kenya</p>
    <p>Visit /api/orders/track/:id to test order tracking.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
