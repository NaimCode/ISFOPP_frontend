import { getImageFromApi } from "../functions";
import { GrLinkNext as NextIcon } from "react-icons/gr";
import { Link } from "react-router-dom";
const PresentationMini = ({ presentation }) => {
  console.log(presentation);
  return (
    <div className="py-11 flex flex-col items-center md:justify-evenly  md:flex-row">
      <div className="w-full md:w-2/5 anim1">
        <img
          src={getImageFromApi(presentation.image, "medium")}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full w flex flex-col  md:w-2/5 anim2">
        <h2 className="md:text-4xl font-title font-semibold">
          {presentation.titre}
        </h2>
        <p className="py-6 font-body opacity-60">{presentation.description}</p>
        <Link to="/presentation" className="group flex">
          <div className="flex gap-1 items-center font-title px-7 py-1 text-lg rounded-2xl transition-all duration-300 bg-secondary  overflow-hidden">
            <span> Plus de détail</span>
            <NextIcon className="text-xl  group-hover:text-2xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PresentationMini;
