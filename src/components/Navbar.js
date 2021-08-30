import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
import BigButton from "./BigButton";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useDispatch } from "react-redux";
//   const { loadingFalse, loadingTrue } = bindActionCreators(
//     actionCreators,
//     useDispatch()
//   );
const Navbar = () => {
  return (
    <div className="bg-white py-1 flex justify-between items-center z-50 fixed w-screen md:px-12 ">
      <Link to="/">
        <img src="./logo.png" alt="" className="h-14" />
      </Link>
      <div className="flex items-center gap-4 font-body">
        {listMenu.map((m) =>
          m.dropdown ? (
            <div key={listMenu.indexOf(m)} className="flex items-end">
              {m.title}
              <DropdownIcon className="text-2xl" />
            </div>
          ) : (
            <Link to={m.route} key={listMenu.indexOf(m)}>
              <span>{m.title}</span>
            </Link>
          )
        )}
      </div>
      <BigButton link="/mon_space" color="primary" title="Mon espace" />
    </div>
  );
};

export default Navbar;
