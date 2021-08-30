import { getImageFromApi } from "../functions";

const Devise = ({ devise }) => {
  console.log(devise);
  return (
    <div className="flex flex-col md:flex-row  md:justify-around py-10">
      {devise.map((d) => (
        <div className="flex flex-col items-center gap-1 w-1/4">
          <img
            src={getImageFromApi(d.image, "small")}
            alt=""
            className="h-48"
          />
          <h3 className="text-xl font-title font-semibold"> {d.titre}</h3>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Devise;
