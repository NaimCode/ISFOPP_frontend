import { Link } from "react-router-dom";
import { listMenu } from "../data/internal";
import { MdArrowDropDown as DropdownIcon } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="bg-white py-1 flex justify-between items-center md:px-12 ">
      <Link href="/">
        <img src="./logo.png" alt="" className="h-14" />
      </Link>
      <div className="flex items-center gap-4 font-body">
        {listMenu.map((m) =>
          m.dropdown ? (
            <div className="flex items-end">
              {m.title}
              <DropdownIcon className="h-6" />
            </div>
          ) : (
            <Link>
              <span>{m.title}</span>
            </Link>
          )
        )}
      </div>
      <Link href="/mon_espace">
        <div className="font-title px-7 py-1 border-2 border-primary text-primary text-lg rounded-2xl transition-all duration-300 hover:bg-primary hover:text-white overflow-hidden">
          Mon espace
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
