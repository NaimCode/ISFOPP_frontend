import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useDispatch } from "react-redux";
//   const { loadingFalse, loadingTrue } = bindActionCreators(
//     actionCreators,
//     useDispatch()
//   );
const Navbar = () => {
  return (
    <div className="bg-white py-1 flex justify-between items-center fixed w-screen md:px-12 ">
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

      <Link to="/mon_espace">
        <div className="font-semibold font-title px-7 py-1 border-2 border-primary text-primary text-lg rounded-2xl transition-all duration-300 hover:bg-primary hover:text-white overflow-hidden">
          Mon espace
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
