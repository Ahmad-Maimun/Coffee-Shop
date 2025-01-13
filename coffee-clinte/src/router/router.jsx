import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import AddCoffeeForm from '../components/AddCoffeeForm/AddCoffeeForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/add-coffee',
        element: <AddCoffeeForm />,
      },
    ],
  },
]);

export default router;
