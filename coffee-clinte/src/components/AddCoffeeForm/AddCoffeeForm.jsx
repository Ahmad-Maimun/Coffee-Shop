import { Link } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddCoffeeForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photoUrl = e.target.photoUrl.value;
    const obj = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(obj);
  };
  return (
    <div className="bg-[url(./assets/images/more/11.png)] bg-cover bg-center">
      <div className="container mx-auto">
        <div className="py-12">
          <Link
            to="/"
            className="text-3xl font-rancho font-normal text-[#374151]"
          >
            <ArrowBackIcon className="mr-3" /> Back to home
          </Link>
        </div>
        <div className="py-[70px] px-28 bg-[#F4F3F0] rounded-[5px] mb-[120px]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl font-rancho font-normal text-[#374151] mb-8">
              Add New Coffee
            </h2>
            <p className="text-lg font-raleway font-normal text-[rgba(27,26,26,0.7)] mb-8 text-center">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form action="" className="flex flex-col" onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee name"
                />
              </div>
              <div>
                <label htmlFor="chef">Chef</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="chef"
                  id="chef"
                  placeholder="Enter coffee chef"
                />
              </div>
              <div>
                <label htmlFor="supplier">Supplier</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="supplier"
                  id=""
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div>
                <label htmlFor="taste">Taste</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="taste"
                  id=""
                  placeholder="Enter coffee taste"
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="category"
                  id=""
                  placeholder="Enter coffee category"
                />
              </div>
              <div>
                <label htmlFor="details">Details</label>
                <input
                  className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
                  type="text"
                  name="details"
                  id=""
                  placeholder="Enter coffee details"
                />
              </div>
            </div>
            <label className="mt-6" htmlFor="photoUrl">
              Photo
            </label>
            <input
              className="mt-4 w-full py-[11px] pl-[11px] text-base font-normal font-raleway rounded-[5px]"
              type="url"
              name="photoUrl"
              placeholder="Enter photo URL"
            />
            <button className="bg-[#D2B48C] border-2 border-[#331A15] rounded-[5px] mt-6 py-3 text-2xl font-rancho font-normal text-[#331A15]">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
