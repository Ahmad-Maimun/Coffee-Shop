import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CoffeeItems = ({ coffee, deleteHandler }) => {
  const { name, chef, photoUrl, price, _id } = coffee;

  return (
    <div className="col-span-6 bg-[#F5F4F1] rounded-xl py-7 px-11 flex items-center">
      <img
        className="w-44 h-44 object-cover rounded-full"
        src={photoUrl}
        alt="Coffee Photo"
      />
      <div className="coffee-info ml-4 gap-3 flex flex-col">
        <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
          Name:{' '}
          <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
            {name}
          </span>
        </span>
        <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
          Chef:{' '}
          <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
            {chef}
          </span>
        </span>
        <span className="text-xl font-semibold font-raleway text-[#1B1A1A]">
          Price:{' '}
          <span className="text-xl font-normal font-raleway text-[#5C5B5B]">
            &#2547; {price}
          </span>
        </span>
      </div>
      <div className="flex flex-col ml-auto gap-4">
        <button className="w-14 h-14 bg-[#D2B48C] rounded-[5px]">
          <RemoveRedEyeIcon sx={{ fontSize: '25px' }} className="text-white" />
        </button>
        <button className="w-14 h-14 bg-[#3C393B] rounded-[5px]">
          <EditIcon sx={{ fontSize: '25px' }} className="text-white" />
        </button>
        <button
          onClick={() => deleteHandler(_id)}
          className="w-14 h-14 bg-[#EA4744] rounded-[5px]"
        >
          <DeleteIcon sx={{ fontSize: '25px' }} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeItems;
