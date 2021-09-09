import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Presentation from "./pages/Presentation";
import EventPage from "./pages/EventPage";
import InfoPage from "./pages/InfoPage";
import FormationPage from "./pages/FormationPage";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/presentation">
            <Presentation />
          </Route>
          <Route path="/events/:slug">
            <EventPage />
          </Route>
          <Route path="/news/:slug">
            <InfoPage />
          </Route>
          <Route path="/formations/:slug">
            <FormationPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
