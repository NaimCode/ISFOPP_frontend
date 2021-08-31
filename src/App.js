import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
function App() {
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
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
