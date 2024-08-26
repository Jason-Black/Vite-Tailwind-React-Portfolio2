


import React from 'react';
import './index.css'; // Make sure this CSS file is imported

function App() {
  return (
    <div className="h-screen" style={{ background: 'linear-gradient(45deg, #3b82f6, #d1d5db)' }}>
      <h1 className="text-white text-4xl font-bold text-center pt-20 transition transform hover:scale-125 hover:text-decoration:underline">
        Welcome to My React App
      </h1>
      <div className="pt-20 hover:text-blue-300 text-2xl text-left">Left Text</div>
    </div>
  );
}

export default App;
