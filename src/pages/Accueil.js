import Hero from "../components/Hero";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useDispatch, useSelector } from "react-redux";
import { objectIsEmpty } from "../functions/etat";
import { API } from "../env";

const Accueil = () => {
  const accueil = useSelector((state) => state.accueil);

  const { setAccueil, loadingTrue, loadingFalse } = bindActionCreators(
    actionCreators,
    useDispatch()
  );
  useEffect(() => {
    if (objectIsEmpty(accueil)) {
      loadingTrue();
      fetch(`${API}accueil`)
        .then((response) => {
          if (response.ok) return response.json();
          else throw response;
        })
        .then((data) => {
          setAccueil(data);
        })
        .finally(() => {
          loadingFalse();
        });
    }
    console.log(accueil);
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Accueil;
