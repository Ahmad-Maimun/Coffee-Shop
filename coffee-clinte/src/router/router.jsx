import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Home/Home';
import AddCoffeeForm from '../components/AddCoffeeForm/AddCoffeeForm';
import UpdateCoffeeForm from '../components/Update/UpdateCoffeeForm';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

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
        loader: ({ params }) =>
          fetch(`http://localhost:8000/coffee/${params.id}`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
