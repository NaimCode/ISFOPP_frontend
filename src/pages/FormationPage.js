import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../env";

import { LoadingPage } from "../components/Loading";
import PageContent from "../components/PageContent";
import { getImageFromApi } from "../functions";
const FormationPage = () => {
  //hjhjhj
  const [event, setevent] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    fetch(`${API}/formations?slug=${slug}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        console.log(data);
        setevent(data[0]);
      });
  }, [slug]);
  return (
    <div>
      {event == null ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="py-12 md:py-16 md:px-24 px-2">
            <h1 className="text-4xl md:text-5xl font-title">{event.titre}</h1>
            <p className="m-5">{event.description}</p>
            <div className="gap-5">
              {event.filiere.map((f) => (
                <div className="border-2 rounded-lg border-gray-400 w-1/3 overflow-hidden">
                  <img
                    src={getImageFromApi(f.logo, "default")}
                    alt=""
                    className="w-full"
                  />
                  <h2 className="font-title text-xl md:text-2xl">{f.titre}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormationPage;
