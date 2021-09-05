import { useEffect, useState } from "react";
import ReactMarkdownComponent from "../components/ReactMarkdown";
import { API } from "../env";
import ReactHtmlParser from "react-html-parser";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";
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
      <div className="pt-11 md:pt-20 w-full flex justify-center">
        <div className="max-w-screen-md px-3 flex flex-col items-center">
          {page != null && ReactHtmlParser(page.contenu)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Presentation;
