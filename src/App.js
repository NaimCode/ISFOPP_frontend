import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Presentation from "./pages/Presentation";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/presentation">
            <Presentation />
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
