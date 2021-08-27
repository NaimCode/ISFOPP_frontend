import { useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "./state/index";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  const loading = useSelector((state) => state.loading);
  // const dispatch = useDispatch();
  // const { depositMoney, withDrawMoney } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  return (
    <Router>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center ">
          <Loading styles={"text-3xl text-primary"} />
        </div>
      ) : (
        <div className="h-screen bg-gray-800">
          <Navbar />
          <Switch>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
