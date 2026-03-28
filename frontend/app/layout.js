import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = { title: 'Inventory System' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '24px', minHeight: '100vh' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}