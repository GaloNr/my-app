// components/videoplayer.js
import React from 'react';

function Videoplayer() {
  return (
    <div className="relative bg-blue-900 rounded-lg overflow-hidden mb-8">
      {/* Video Placeholder */}
      <div className="aspect-video flex items-center justify-center bg-blue-950">
        <span className="text-xl text-white">VIDEO</span>
        
        {/* Control Icons */}
        <div className="absolute aspect-video border-4 border-white w-full h-15/100 flex place-self-bottom justify-between items-center bottom-0 left-0 right-0">
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-8 h-8 bg-white rounded cursor-pointer hover:bg-gray-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoplayer;