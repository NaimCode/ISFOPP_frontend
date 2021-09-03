import { useEffect, useState } from "react";
import ReactMarkdownComponent from "../components/ReactMarkdown";
import { API } from "../env";
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
    <div className="pt-20">
      {page && <ReactMarkdownComponent data={page.contenu} />}
    </div>
  );
};

export default Presentation;
