// import { useSelector, useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "./state/index";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  // const account = useSelector((state) => state.account);
  // const dispatch = useDispatch();
  // const { depositMoney, withDrawMoney } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  return (
    <Router>
      <div className="h-screen bg-gray-800">
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
