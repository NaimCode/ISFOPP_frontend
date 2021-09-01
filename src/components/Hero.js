import { Link } from "react-router-dom";
import { getImageFromApi } from "../functions";

import { GrLinkNext as NextIcon } from "react-icons/gr";
const Hero = ({ annonce }) => {
  return (
    <div className="w-screen overflow-hidden h-screen bg-secondary relative">
      <img
        src={getImageFromApi(annonce[0].Image, "large")}
        alt=""
        className="object-cover h-full w-full"
      />
      <div className="absolute left-0 top-1/3 flex flex-col  w-full px-8 py-10 bg-primary text-center bg-opacity-70 md:w-3/5 md:text-left">
        <h1 className="font-title text-3xl md:text-5xl font-bold text-white">
          {annonce[0].Titre}
        </h1>
        <p className="font-body text-white opacity-70 pt-4 pb-5">
          {annonce[0].Description}
        </p>
        <Link to={annonce.Link} className="group flex">
          <div className="flex gap-1 items-center font-title px-7 py-1 text-lg rounded-2xl transition-all duration-300 bg-secondary  overflow-hidden">
            <span> Plus de détail</span>
            <NextIcon className="text-xl  group-hover:text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
