import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
import { AiFillPhone as PhoneIcon } from "react-icons/ai";
import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
import DropdownMenuItem from "./DropdownMenuItem";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useDispatch } from "react-redux";
//   const { loadingFalse, loadingTrue } = bindActionCreators(
//     actionCreators,
//     useDispatch()
//   );
const Navbar = () => {
  return (
    <div className="bg-white py-1 flex justify-between shadow-lg items-center z-50 fixed w-screen px-2 md:px-12 ">
      <Link to="/">
        <img src="/logo.png" alt="" className="h-10 md:h-14" />
      </Link>
      <MenuIcon className="md:hidden text-3xl text-primary" />
      <div className="hidden md:flex items-center gap-4 font-body">
        {listMenu.map((m) =>
          m.dropdown ? (
            <div className="group">
              <div
                key={listMenu.indexOf(m)}
                className="cursor-pointer flex items-end transition-all duration-300 hover:scale-105 hover:text-primary"
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
      <button className="rounded-full bg-secondary p-2 group focus:outline-none">
        <PhoneIcon className="text-3xl text-white transition-all duration-300 hover:scale-110" />
      </button>
      {/* <BigButton link="/mon_space" color="primary" title="Mon espace" /> */}
    </div>
  );
};

export default Navbar;
