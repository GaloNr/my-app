// components/videoplayer.js
import React from 'react';

function Videoplayer() {
  return (
    <div className="relative bg-blue-900 rounded-lg overflow-hidden mb-8">
      {/* Video Placeholder */}
      <div className="aspect-video flex items-center justify-center bg-blue-950">
        <span className="text-xl text-white">VIDEO</span>
        
        {/* Control Icons */}
        <div className="absolute top-4 right-4 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="w-8 h-8 bg-gray-800 rounded cursor-pointer hover:bg-gray-700"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videoplayer;