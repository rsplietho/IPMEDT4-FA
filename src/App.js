import { Outlet } from 'react-router-dom';
import MobileNavBar from './components/navigation/MobileNavBar';
import BottomNav from './components/navigation/BottomNav';

function App() {
  return (
    <div>
      <MobileNavBar />
      <Outlet />
      <BottomNav />
    </div>
  );
}

export default App;
