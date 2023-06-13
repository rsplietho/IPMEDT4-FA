import { Outlet } from 'react-router-dom';
import MobileNavBar from './components/navigation/MobileNavBar';
import BottomNav from './components/navigation/BottomNav';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <MobileNavBar />
      <Outlet />
      <BottomNav />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
