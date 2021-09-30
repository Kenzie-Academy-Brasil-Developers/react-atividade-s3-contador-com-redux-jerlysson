import { useSelector } from "react-redux";

function Display() {
  const result = useSelector((state) => state.sum);

  return (
    <>
      <span>{result}</span>
    </>
  );
}
export default Display;
