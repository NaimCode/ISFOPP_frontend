import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";

const Accueil = () => {
  const [accueil, setaccueil] = useState(null);

  useEffect(() => {
    fetch(`${API}/accueil`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        setaccueil(data);
      });
  }, []);
  return (
    <div>
      {accueil && (
        <div>
          <Hero annonce={accueil.Annonces} />
        </div>
      )}
    </div>
  );
};

export default Accueil;
