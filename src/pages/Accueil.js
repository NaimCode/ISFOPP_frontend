import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";

const Accueil = () => {
  const [isLoading, setisLoading] = useState(false);
  const [accueil, setaccueil] = useState();

  useEffect(() => {
    setisLoading(true);
    fetch(`${API}accueil`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        setaccueil(data);
      })
      .finally(() => {
        setisLoading(false);
      });

    console.log(accueil);
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Accueil;
