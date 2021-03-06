import { useEffect, useState } from "react";
import { API } from "../env";
import { getImageFromApi } from "../functions";
import { Link } from "react-router-dom";
const Info = () => {
  const [info, setinfo] = useState(null);
  useEffect(() => {
    fetch(`${API}/informations?_limit=4`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        console.log(data);
        setinfo(data);
      });
  }, []);
  return (
    <section class="text-gray-600 body-font">
      {info != null && (
        <div class="container px-2 md:px-14 py-12 mx-auto">
          <div class="flex flex-wrap w-full mb-6 md:mb-20 px-3 md:px-10 ">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">
                Nouvelles
              </h1>
              <div class="h-1 w-20 bg-primary rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            {info
              .sort((a, b) => {
                if (a.id < b.id) return 1;
                else {
                  if (a.id > b.id) return -1;
                  else return 0;
                }
              })
              .map((i) => (
                <div class=" md:w-1/2 py-5 px-10 group">
                  <div class=" rounded-lg">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-4 anim1">
                      {i.titre}
                    </h2>
                    <div className="h-40 rounded w-full  mb-6 anim1 overflow-hidden">
                      <img
                        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                        src={getImageFromApi(i.image, "k")}
                        alt="content"
                      />
                    </div>

                    <p class="leading-relaxed text-base text-body anim2">
                      {i.description}
                    </p>
                    <Link to={`/news/${i.slug}`}>
                      <a
                        href={`/news/${i.slug}`}
                        class="text-indigo-500 inline-flex items-center mt-4 anim2"
                      >
                        Plus de d??tail
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Info;
