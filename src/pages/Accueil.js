import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";
import Devise from "../components/Devise";
import { getImageFromApi } from "../functions";

const Accueil = () => {
  const [accueil, setaccueil] = useState(null);

  useEffect(() => {
    fetch(`${API}/accueil`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        console.log(data);
        setaccueil(data);
      });
  }, []);
  return (
    <div className="overflow-hidden">
      {accueil && (
        <div className="h-screen w-screen relative overflow-y-scroll overflow-x-hidden">
          <img
            src={getImageFromApi(accueil.background, "large")}
            alt=""
            className="object-cover h-full w-full"
          />
          <div className="absolute top-0 left-0  z-10">
            <Hero annonce={accueil.Annonces} />
            <Devise devise={accueil.devise} />
            <div className="h-32 w-full bg-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
