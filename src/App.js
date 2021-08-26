import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <button onClick={() => depositMoney(10)}>+</button>
      <span> {account}</span>
      <button onClick={() => withDrawMoney(10)}>-</button>
    </div>
  );
}

export default App;
