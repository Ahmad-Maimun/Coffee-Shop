import { navbarLogo } from '../assets/images';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div className="bg-center bg-[url(./assets/images/more/13.jpg)]">
      <div className="container mx-auto grid grid-cols-12 items-center pt-[100px] pb-6">
        <div className="col-span-6">
          <img className="w-[75px] h-[90px] mb-6" src={navbarLogo} alt="" />
          <span className="font-rancho text-[#331A15] text-5xl font-normal mb-8 block">
            Espresso Emporium
          </span>
          <p className="text-xl font-normal font-raleway text-[#1B1A1A] mb-8">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="social-icons mb-8 gap-3 flex">
            <FacebookOutlinedIcon
              sx={{ fontSize: '35px' }}
              className="text-[#331A15] !important"
            />
            <TwitterIcon sx={{ fontSize: '35px' }} className="text-[#331A15]" />
            <InstagramIcon
              sx={{ fontSize: '35px' }}
              className="text-[#331A15]"
            />
            <LinkedInIcon
              sx={{ fontSize: '35px' }}
              className="text-[#331A15]"
            />
          </div>
          <span className="text-[45px] font-normal font-rancho text-[#331A15] mb-8 block">
            Get in Touch
          </span>
          <div className="contact-info">
            <div className="mb-4">
              <CallIcon
                sx={{ fontSize: '24px' }}
                className="text-[#331A15] mr-4"
              />
              <span className="text-[#1B1A1A] text-xl font-raleway">
                +88 01533 333 333
              </span>
            </div>
            <div className="mb-4">
              <EmailIcon
                sx={{ fontSize: '24px' }}
                className="text-[#331A15] mr-4"
              />
              <span className="text-[#1B1A1A] text-xl font-raleway">
                info@gmail.com
              </span>
            </div>
            <div className="mb-4">
              <LocationOnIcon
                sx={{ fontSize: '24px' }}
                className="text-[#331A15] mr-4"
              />
              <span className="text-[#1B1A1A] text-xl font-raleway">
                72, Wall street, King Road, Dhaka
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-6 ">
          <span className="text-5xl font-normal font-rancho text-[#331A15] mb-8 block">
            Connect with Us
          </span>
          <form action="" className="flex flex-col gap-4">
            <input
              className="w-[503px] h-10 bg-white py-4 px-3 text-base font-normal font-raleway text-[rgba(27,26,26,0.6)] focus:outline-0"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-[503px] h-10 bg-white py-4 px-3 text-base font-normal font-raleway text-[rgba(27,26,26,0.6)] focus:outline-0"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="w-[503px] min-h-32 max-h-32 py-4 px-3 text-base font-normal font-raleway text-[rgba(27,26,26,0.6)] focus:outline-0 mb-6"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
          </form>
          <button className="py-2 px-5 border-2 border-[#331A15] rounded-[30px] text-2xl font-normal font-rancho text-[#331A15]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
