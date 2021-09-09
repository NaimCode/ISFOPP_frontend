import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
import { AiFillPhone as PhoneIcon } from "react-icons/ai";
import { HiOutlineMenuAlt2 as MenuIcon } from "react-icons/hi";
import { useHistory, useLocation } from "react-router-dom";
import DropdownMenuItem from "./DropdownMenuItem";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useDispatch } from "react-redux";
//   const { loadingFalse, loadingTrue } = bindActionCreators(
//     actionCreators,
//     useDispatch()
//   );
const Navbar = () => {
  const router = useHistory();
  const location = useLocation();

  return (
    <div className="bg-white py-1 flex justify-between shadow-lg items-center z-50 fixed w-screen px-2 md:px-12 ">
      <MenuIcon className="md:hidden text-3xl text-primary" />
      <Link to="/">
        <img src="/logo.png" alt="" className="h-12 md:h-14" />
      </Link>

      <div className="hidden md:flex items-center gap-4 font-body">
        {listMenu.map((m) =>
          m.dropdown ? (
            <div className="group">
              <div
                key={listMenu.indexOf(m)}
                className={`cursor-pointer flex items-end transition-all duration-300 ${
                  location.pathname === m.route && "scale-105 text-primary"
                } hover:scale-105 hover:text-primary`}
              >
                {m.title}
                <DropdownIcon className="text-2xl " />
              </div>
              <div className="absolute hidden top-10 bg-white border-2 shadow-xl group-hover:block">
                <DropdownMenuItem />
              </div>
            </div>
          ) : (
            <Link to={m.route} key={listMenu.indexOf(m)}>
              <div className="transition-all duration-300 hover:scale-105 hover:text-primary">
                {m.title}
              </div>
            </Link>
          )
        )}
      </div>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="group rounded-full hover:bg-yellow-600 bg-secondary p-2 group focus:outline-none flex items-center text-white font-bold font-body"
      >
        CONTACT
        <PhoneIcon className="text-3xl text-white transition-all duration-300 group-hover:scale-110" />
      </button>
      {/* <BigButton link="/mon_space" color="primary" title="Mon espace" /> */}
    </div>
  );
};

export default Navbar;
