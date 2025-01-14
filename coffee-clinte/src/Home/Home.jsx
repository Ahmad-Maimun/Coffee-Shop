import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import CoffeeItems from '../components/CoffeeItems/CoffeeItems';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/coffees')
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="text-xl font-normal font-raleway text-[#1B1A1A] mb-2 mt-28 block">
          --- Sip & Savor ---
        </span>
        <h2 className="text-[#331A15] text-[55px] font-rancho font-normal mb-4">
          Our Popular Products
        </h2>
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
      </div>
      <div className="grid grid-cols-12 gap-6 mb-[120px]">
        {coffees.map((coffee) => (
          <CoffeeItems key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
