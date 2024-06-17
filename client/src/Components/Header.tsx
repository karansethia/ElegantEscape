import {NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import {useAppContext} from "../context/AppContext";
import {useLogout} from "../hooks/user-hooks";
type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const {isLoggedIn} = useAppContext();
  console.log(isLoggedIn);

  const {mutate} = useLogout();

  // return (
  //   <div className="bg-blue-700 py-6">
  //     <div className="flex justify-between container mx-auto">
  //       <span className="text-3xl text-white font-bold tracking-tight">
  //         <Link to="/">Elegant Escapes</Link>
  //       </span>
  //       <span className="flex space-x-2 gap-2 text-white items-center font-semibold">
  //         {isLoggedIn ? (
  //           <>
  //             <Link to="my-bookings">My Bookings</Link>
  //             <Link to="my-hotels">My Hotels</Link>
  //             <button onClick={() => mutate()}>Sign out</button>
  //           </>
  //         ) : (
  //           <Link
  //             to="/signin"
  //             className="flex items-center bg-white rounded-md text-blue-600 px-6 font-semibold ease-linear hover:bg-gray-100"
  //           >
  //             Sign in
  //           </Link>
  //         )}
  //       </span>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-row items-center justify-between mx-8 my-3">
      <nav className="flex flex-row items-center gap-4 font-poppins text-slate-600 text-xs">
        <NavLink to="/">Top Hotels</NavLink>
        <NavLink to="/">Vacation Spots</NavLink>
        <NavLink to="/">Book Guide</NavLink>
      </nav>
      <img src={logo} alt="Elegant Escapes" className="w-56" />
      {!isLoggedIn && (
        <nav className="flex flex-row items-center gap-4 font-poppins text-slate-600 text-xs">
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/">Helpline</NavLink>
          <NavLink to="/signin" className="bg-[#FEC785] px-6 py-1.5 rounded-sm">
            Sign In
          </NavLink>
        </nav>
      )}
      {isLoggedIn && (
        <nav className="flex flex-row items-center gap-4 font-poppins text-slate-600 text-xs">
          <NavLink to="/">My Bookings</NavLink>
          <NavLink to="/">My Hotels</NavLink>
          <button
            onClick={() => mutate()}
            className="bg-[#FEC785] px-6 py-1.5 rounded-sm"
          >
            Sign Out
          </button>
        </nav>
      )}
    </div>
  );
};

export default Header;
