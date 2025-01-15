import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import AddCoffeeForm from '../components/AddCoffeeForm/AddCoffeeForm';
import UpdateCoffeeForm from '../components/Update/UpdateCoffeeForm';

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
      {
        path: '/update/:id',
        element: <UpdateCoffeeForm />,
      },
    ],
  },
]);

export default router;
