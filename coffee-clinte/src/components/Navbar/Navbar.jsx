import { navbarLogo } from '../../assets/images';

const Navbar = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url(./assets/images/more/15.jpg)] flex justify-center items-center py-4">
        <img className="w-[75px] h-[90px]" src={navbarLogo} alt="" />
        <span className="font-rancho text-[60px] font-normal text-white ml-4">
          Espresso Emporium
        </span>
      </div>
    </>
  );
};

export default Navbar;
