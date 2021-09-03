import { useEffect, useState } from "react";
import { API } from "../env";
import { getImageFromApi, monthNumToString } from "../functions";
import { Link } from "react-router-dom";
const Event = () => {
  const [event, setevent] = useState(null);
  useEffect(() => {
    fetch(`${API}/notifications`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw response;
      })
      .then((data) => {
        console.log(data);
        setevent(data);
      });
  }, []);
  return (
    <div>
      {event && (
        <div class="container px-3 md:px-24 py-10 md:py-24 mx-auto ">
          <div class="flex flex-wrap w-full mb-5 md:mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-5xl text-3xl font-medium title-font mb-2 text-gray-900">
                Evenements
              </h1>
              <div class="h-1 w-20 bg-primary rounded"></div>
            </div>
          </div>
          {event.slice(0, 3).map((e) => (
            <div class="-my-8 divide-y-2 divide-gray-100">
              {event.indexOf(e) != 0 && <hr className="bg-primary mt-6"></hr>}
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col anim2">
                  <span class="font-bold  font-title text-accent text-5xl">
                    {e.jours}
                  </span>
                  <span class="mt-1 text-gray-500 text-sm">
                    {monthNumToString(e.mois)} 2019
                  </span>
                </div>
                <div class="md:flex-grow anim1">
                  <h2 class="text-2xl font-medium text-gray-900 font-title mb-2">
                    {e.titre}
                  </h2>
                  <p class="leading-relaxed font-body opacity-60">
                    {e.description}
                  </p>
                  <Link to="/page">
                    <a class="text-indigo-500 inline-flex items-center mt-4">
                      Plus de détail
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
