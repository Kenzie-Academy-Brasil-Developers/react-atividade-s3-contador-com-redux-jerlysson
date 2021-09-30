import "./style.css";
import { useDispatch } from "react-redux";
import {
  ADD_NUMBER,
  SUB_NUMBER,
} from "../../store/modules/counter/actionTypes";

function Contador() {
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: ADD_NUMBER, payload: 1 });
  };
  const sub = () => {
    dispatch({ type: SUB_NUMBER, payload: 1 });
  };

  return (
    <div>
      <button className="btn" onClick={add}>
        +
      </button>
      <button className="btn" onClick={sub}>
        -
      </button>
    </div>
  );
}
export default Contador;
