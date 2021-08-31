import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";
import Devise from "../components/Devise";
import { getImageFromApi } from "../functions";
import PresentationMini from "../components/PresentationMini";
import Notif from "../components/Notif";

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
    <div>
      {accueil && (
        <div className="h-screen w-screen overflow-x-hidden">
          <div>
            <Hero annonce={accueil.Annonces} />
            <Devise devise={accueil.devise} />
            <PresentationMini presentation={accueil.presentation} />
            <Notif />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
