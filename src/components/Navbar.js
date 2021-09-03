import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
import { AiFillPhone as PhoneIcon } from "react-icons/ai";
import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
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
        <img src="./logo.png" alt="" className="h-10 md:h-14" />
      </Link>
      <MenuIcon className="text-3xl text-primary" />
      <div className="hidden md:flex items-center gap-4 font-body">
        {listMenu.map((m) =>
          m.dropdown ? (
            <div
              key={listMenu.indexOf(m)}
              className="flex items-end hover:text-primary"
            >
              {m.title}
              <DropdownIcon className="text-2xl " />
            </div>
          ) : (
            <Link to={m.route} key={listMenu.indexOf(m)}>
              <span className="hover:text-primary">{m.title}</span>
            </Link>
          )
        )}
        <button className="rounded-full bg-secondary p-2 group focus:outline-none">
          <PhoneIcon className="text-3xl text-white transition-all duration-300 hover:scale-110" />
        </button>
      </div>
      {/* <BigButton link="/mon_space" color="primary" title="Mon espace" /> */}
    </div>
  );
};

export default Navbar;
