// components/transcriptlist.js
import React from 'react';

function Transcriptlist() {
  const transcripts = [
    { time: '00:01', text: 'Lorem ipsum dolor sit amet consectetur.' },
    { time: '00:15', text: 'Scelerisque sit eget sed vitae ornare at a est euismod.' },
    { time: '00:42', text: 'Rhoncus ac nunc tempus dolor...' }
  ];

  return (
    <div className="space-y-4 mb-12">
      <h2 className="text-xl font-semibold">Transcript</h2>
      
      <ul className="space-y-2">
        {transcripts.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="font-mono text-sm text-gray-600">{item.time}</span>
            <span className="text-gray-700">{item.text}</span>
          </li>
        ))}
      </ul>

      {/* Next Button Section */}
      <div className="mt-8 pt-8 border-t">
        <p className="mb-4 text-gray-600">
          Up next: Lorem ipsum dolor sit amet consectetur. blablablablablablab
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Transcriptlist;