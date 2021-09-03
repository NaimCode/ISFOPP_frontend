import { getImageFromApi } from "../functions";

const Devise = ({ devise }) => {
  return (
    <div className="text-center md:text-left px-3 flex flex-col md:flex-row  md:justify-around py-10">
      {devise.map((d) => (
        <div className="flex flex-col items-center gap-1 w-full md:w-1/4 anim1">
          <img
            src={getImageFromApi(d.image, "small")}
            alt=""
            className="h-32 md:h-48"
          />
          <h3 className="text-xl font-title font-semibold"> {d.titre}</h3>
          <p className="font-body opacity-60">{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Devise;
