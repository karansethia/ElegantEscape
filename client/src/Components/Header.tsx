import {Link} from "react-router-dom";
type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <div className="bg-blue-700 py-6">
      <div className="flex justify-between container mx-auto">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Elegant Escapes</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/signin"
            className="flex items-center bg-white rounded-md text-blue-600 px-6 font-semibold ease-linear hover:bg-gray-100"
          >
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
