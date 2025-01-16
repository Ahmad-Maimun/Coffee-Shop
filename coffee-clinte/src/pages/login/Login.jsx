import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="bg-[url(./assets/images/more/11.png)] bg-cover bg-center">
      <Link to="/" className="text-3xl font-rancho font-normal text-[#374151]">
        <ArrowBackIcon className="mr-3" /> Back to home
      </Link>
      <div className="w-6/12 mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-center text-[#8C4A2F] mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#8C4A2F] mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-[#D9A17E] rounded-md focus:outline-none focus:ring focus:ring-[#D9A17E]"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#8C4A2F] mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-[#D9A17E] rounded-md focus:outline-none focus:ring focus:ring-[#D9A17E]"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8C4A2F] text-white py-2 rounded-md hover:bg-[#733c26] transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-[#8C4A2F]">
            Don't have an account?{' '}
            <Link
              to={'/register'}
              className="text-[#D9A17E] font-medium cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
