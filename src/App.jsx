import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] bg-[#f9f9f6] flex items-center justify-center">
      <div className="bg-[#ffffff] p-5 flex justify-center flex-col w-6/12 rounded-lg shadow-2xl">
        <h1 className=" p-5  text-[#504e63] font-bold  text-center">
          I'm your new Tailwind Project'
        </h1>
        <p className="text-[#504e63] text-center">
          Delete this and make something great
        </p>
      </div>
    </div>
  );
}

export default App;
