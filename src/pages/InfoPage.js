import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../env";

import { LoadingPage } from "../components/Loading";
import PageContent from "../components/PageContent";
const InfoPage = () => {
  const [event, setevent] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    fetch(`${API}/informations?slug=${slug}`)
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
        <PageContent content={event.contenu} />
      )}
    </div>
  );
};

export default InfoPage;
