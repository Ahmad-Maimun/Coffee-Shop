import { coffee1 } from '../../assets/images';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CoffeeItems = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 mb-[120px]">
        <div className="col-span-6 bg-[#F5F4F1] rounded-xl py-7 pr-12 flex items-center">
          <img src={coffee1} alt="" />
          <div className="coffee-info ml-4 gap-3 flex flex-col">
            <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
              Name:{' '}
              <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
                Americano Coffee
              </span>
            </span>
            <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
              Chef:{' '}
              <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
                Mr. Matin Paul
              </span>
            </span>
            <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
              Price:{' '}
              <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
                890 Taka
              </span>
            </span>
          </div>
          <div className="flex flex-col ml-auto gap-4">
            <button className="w-14 h-14 bg-[#D2B48C] rounded-[5px]">
              <RemoveRedEyeIcon
                sx={{ fontSize: '25px' }}
                className="text-white"
              />
            </button>
            <button className="w-14 h-14 bg-[#3C393B] rounded-[5px]">
              <EditIcon sx={{ fontSize: '25px' }} className="text-white" />
            </button>
            <button className="w-14 h-14 bg-[#EA4744] rounded-[5px]">
              <DeleteIcon sx={{ fontSize: '25px' }} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeItems;
