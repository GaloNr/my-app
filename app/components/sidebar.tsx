// components/sidebar.js
import React from 'react';

function Sidebar() {
  const units = [
    { id: 1, title: 'Unit 1', description: 'Introduction to fundamentals' },
    { id: 2, title: 'Unit 2', description: 'Advanced concepts' },
    { id: 3, title: 'Unit 3', description: 'Practical applications' }
  ];

  return (
    <aside className="w-64 bg-white border-r shadow-lg overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">SHUAQ</h1>
        
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full mt-4 px-3 py-2 rounded-md border border-gray-300"
        />
      </div>

      {/* Topic Section */}
      <section className="p-6">
        <h2 className="text-lg font-semibold mb-4">TOPIC 1:</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
        </p>

        {/* Units */}
        {units.map((unit) => (
          <div 
            key={unit.id}
            className={`p-4 cursor-pointer transition-colors ${
              unit.id === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'
            }`}
          >
            <h3 className="font-bold">{unit.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{unit.description}</p>
          </div>
        ))}
      </section>
    </aside>
  );
}

export default Sidebar;