import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Presentation from "./pages/Presentation";
import EventPage from "./pages/EventPage";
import InfoPage from "./pages/InfoPage";
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
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
