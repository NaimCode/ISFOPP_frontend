import Hero from "../components/Hero";
import { useEffect, useState } from "react";

import { API } from "../env";
import Devise from "../components/Devise";
import { getImageFromApi } from "../functions";
import PresentationMini from "../components/PresentationMini";
import Event from "../components/Event";
import Info from "../components/Info";
import Temoignage from "../components/Temoignage";
import Footer from "../components/Footer";

const Accueil = () => {
  const [accueil, setaccueil] = useState(null);

  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa1");
        } else {
          entry.target.classList.remove("animate-topOpa1");
          entry.target.classList.add("opacity-0");
        }
      });
    };
    const callback2 = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa2");
        } else {
          entry.target.classList.remove("animate-topOpa2");
          entry.target.classList.add("opacity-0");
        }
      });
    };

    const observer2 = new IntersectionObserver(callback2);

    const observer = new IntersectionObserver(callback);
    const targets2 = document.querySelectorAll(".anim2");
    targets2.forEach(function (target) {
      observer2.observe(target);
    });
    const targets = document.querySelectorAll(".anim1");
    targets.forEach(function (target) {
      observer.observe(target);
    });

    // return () => {
    //   cleanup
    // }

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
            <Event />
            <Info />
            <Temoignage temoignages={accueil.temoignage} />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
