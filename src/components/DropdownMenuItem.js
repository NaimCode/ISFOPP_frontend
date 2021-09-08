import { useEffect, useState } from "react";
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
        <div className="cursor-pointer text-base py-4 px-6 hover:text-white  hover:bg-primaryLight bg-opacity-30 font-body font-thin ">
          {m.titre}
        </div>
      ))}
    </>
  );
};

export default DropdownMenuItem;
