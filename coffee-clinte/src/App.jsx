import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
