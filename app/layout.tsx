// components/layout.js
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';

function Layout() {
  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <MainContent />
        </div>
      </body>
    </html>

  );
}

export default Layout;