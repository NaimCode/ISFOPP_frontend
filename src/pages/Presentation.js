import { useEffect, useState } from "react";

import { API } from "../env";

import { LoadingPage } from "../components/Loading";
import PageContent from "../components/PageContent";
const Presentation = () => {
  const [page, setpage] = useState(null);
  useEffect(() => {
    fetch(`${API}/presentation`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        setpage(data);
      });
  }, []);
  return (
    <div>
      {page == null ? <LoadingPage /> : <PageContent content={page.contenu} />}
    </div>
  );
};

export default Presentation;
