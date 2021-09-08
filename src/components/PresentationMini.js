import { getImageFromApi } from "../functions";
import { GrLinkNext as NextIcon } from "react-icons/gr";
import { Link } from "react-router-dom";
const PresentationMini = ({ presentation }) => {
  console.log(presentation);
  return (
    <div className="py-11 flex flex-col items-center md:justify-evenly  md:flex-row">
      <div className="w-full md:w-2/5 anim1">
        <img
          src={getImageFromApi(presentation.image, "default")}
          alt=""
          className="object-cover w-full h-full transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="px-3 md:px-0 w-full text-center md:text-left items-center md:items-start flex flex-col transition-all duration-300 hover:scale-105  md:w-2/5 anim2">
        <h2 className="text-3xl md:text-4xl font-title font-semibold pt-2 md:pt-0">
          {presentation.titre}
        </h2>
        <p className="py-6 font-body opacity-60">{presentation.description}</p>
        <Link to="/presentation" className="group flex">
          <div className="flex gap-1 items-center font-title px-7 py-1 text-lg rounded-2xl transition-all duration-300 bg-secondary  overflow-hidden">
            <span> Plus de détail</span>
            <NextIcon className="text-base" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PresentationMini;
