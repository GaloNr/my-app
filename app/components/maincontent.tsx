// components/maincontent.js
import Videoplayer from './videoplayer';
import Transcriptlist from './transcriptlist';

function MainContent() {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Video Title */}
        <h1 className="text-2xl font-bold mb-6">Video Lesson</h1>
        
        {/* Video Player Section */}
        <Videoplayer />
        
        {/* Transcript Section */}
        <Transcriptlist />
      </div>
    </main>
  );
}

export default MainContent;