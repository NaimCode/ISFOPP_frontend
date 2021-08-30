import { getImageFromApi } from "../functions";

const Hero = (annonce) => {
  console.log(annonce);
  return (
    <div className="w-screen flex h-screen bg-white">
      <img
        src={getImageFromApi(annonce.annonce[0].image, "large")}
        alt=""
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
