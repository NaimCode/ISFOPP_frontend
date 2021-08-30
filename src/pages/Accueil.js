import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";

const Accueil = () => {
  const [isLoading, setisLoading] = useState(false);
  const [accueil, setaccueil] = useState();

  useEffect(() => {
    fetch(`${API}accueil`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        setaccueil(data);
      })
      .finally(() => {
        console.log(accueil);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="h-screen w-screen bg-white flex justify-center items-center"></div>
      ) : (
        <div>
          {" "}
          <Hero annonce={accueil.Annonces} />{" "}
        </div>
      )}
    </div>
  );
};

export default Accueil;
