import { getImageFromApi } from "../functions";

const Hero = ({ annonce }) => {
  console.log(annonce);
  return (
    <div className="w-screen overflow-hidden h-screen bg-secondary ">
      <img
        src={getImageFromApi(annonce[1].Image, "large")}
        alt=""
        className="object-right"
      />
      {/* <div className="absolute left-0 top-[50%] w-full bg-primary bg-opacity-30 md:w-3/5">
        <h1> {annonce[0].Titre}</h1>
        <p>{annonce[0].Description}</p>
      </div> */}
    </div>
  );
};

export default Hero;
