// components/transcriptlist.js
import React from 'react';  

function Transcriptlist() {
  const transcripts = [
    { time: '00:01', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { time: '00:15', text: 'Scelerisque sit eget sed vitae ornare at a est euismod.blababablablalblabllallblablallblblbalblablablablablalbalbalbalblablablablablabalablbal' },
    { time: '00:42', text: 'Rhoncus ac nunc tempus dolor...' }
  ];

  return (
    <div className="font-sans">
        <div className="space-y-4 mb-12 bg-gray-200 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold row-span-1 my-0">Transcript</h2>
        
        <ul className="space-y-6 row-span-2 max-h-120 overflow-y-auto mt-8">
            {transcripts.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
                <span className="font-mono text-sm text-gray-600 rounded cursor-pointer hover:text-gray-900 transition-colors">{item.time}</span>
                <span className="text-gray-900">{item.text}</span>
            </li>
            ))}
        </ul>
        </div>

        {/* Next Button Section */}
        <div className="mt-8 pt-8 border-t grid grid-cols-2 items-center gap-4 sm:flex justify-between">
            <p className="mb-4 text-gray-600">
            Up next: Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            NEXT
            </button>
        </div>
    </div>
  );
}

export default Transcriptlist;