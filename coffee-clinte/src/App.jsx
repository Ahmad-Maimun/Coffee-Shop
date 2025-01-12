import { Outlet } from 'react-router';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
