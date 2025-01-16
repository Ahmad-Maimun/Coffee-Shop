import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import LoginIcon from '@mui/icons-material/Login';
import CoffeeItems from '../components/CoffeeItems/CoffeeItems';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/coffees')
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  const deleteHandler = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/coffee/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            const newData = coffees.filter((cofffe) => cofffe._id !== id);
            setCoffees(newData);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mb-12">
        <span className="text-xl font-normal font-raleway text-[#1B1A1A] mb-2 mt-28 block">
          --- Sip & Savor ---
        </span>
        <h2 className="text-[#331A15] text-[55px] font-rancho font-normal mb-4">
          Our Popular Products
        </h2>
        <div className="gap-3 flex justify-center">
          <Link
            to="/add-coffee"
            className="py-2 px-6 bg-[#E3B577] border-2 border-[#331A15] rounded-[5px] text-2xl font-normal font-rancho text-white"
          >
            Add Coffee
            <LocalCafeOutlinedIcon
              sx={{ fontSize: '26px' }}
              className="ml-2 text-[#331A15]"
            />
          </Link>
          <Link
            to="/login"
            className="py-2 px-6 bg-[#E3B577] border-2 border-[#331A15] rounded-[5px] text-2xl font-normal font-rancho text-white"
          >
            Sign In
            <LoginIcon
              sx={{ fontSize: '26px' }}
              className="ml-2 text-[#331A15]"
            />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-[120px]">
        {coffees.map((coffee) => (
          <CoffeeItems
            key={coffee._id}
            coffee={coffee}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
