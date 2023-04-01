import { ISLOGIN } from "./constants/actionTypes";
import Router from "./routes";
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch();
  dispatch({type:ISLOGIN})
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
