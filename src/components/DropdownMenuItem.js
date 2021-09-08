import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../env";
const DropdownMenuItem = () => {
  const [menuFormstion, setmenuFormstion] = useState([]);
  useEffect(() => {
    fetch(`${API}/formations`)
      .then((res) => {
        if (res.ok) return res.json();
        else throw res;
      })
      .then((data) => {
        setmenuFormstion(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {menuFormstion.map((m) => (
        <Link to={`/formations/${m.slug}`}>
          <div className="cursor-pointer text-base py-4 px-6 hover:text-white  hover:bg-primaryLight bg-opacity-30 font-body font-thin ">
            {m.titre}
          </div>
        </Link>
      ))}
    </>
  );
};

export default DropdownMenuItem;
