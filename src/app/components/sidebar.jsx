'use client'
import React, { useState } from 'react';

function Sidebar() {
  const [CurrentClicked, setCurrentClicked] = useState(0);

  const handleClick = (unit) => {
    setCurrentClicked(unit.id);
    console.log(CurrentClicked);
  };

  const units = [
    { id: 1, title: 'Unit 1', description: 'Introduction to fundamentals' },
    { id: 2, title: 'Unit 2', description: 'Advanced concepts' },
    { id: 3, title: 'Unit 3', description: 'Practical applications' }
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-lg overflow-y-auto">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">SHUAQ</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full mt-4 px-3 py-2 rounded-md border border-gray-300"
        />
      </div>

      <section className="p-6">
        <h2 className="text-lg font-semibold mb-4">TOPIC 1:</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
        </p>

        <div className="space-y-2">
          {units.map((unit) => (
            <div
              key={unit.id}
              className={`p-4 border-2 border-gray-300 rounded-md cursor-pointer transition-colors ${CurrentClicked == unit.id ? "bg-blue-600 hover:bg-blue-400" : "bg-white-200 hover:bg-gray-200"}`}
              onClick={() => handleClick(unit)}
            >
              <h3 className={`font-bold transition-colors ${CurrentClicked == unit.id ? "text-white" : "text-black"}`}>{unit.title}</h3>
              <p className={`text-gray-600 mt-2 text-sm transition-colors ${CurrentClicked == unit.id ? "text-white" : "text-gray-600"}`}>{unit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
