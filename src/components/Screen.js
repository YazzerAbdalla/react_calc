import { useCalcState } from "../contexts/CalcContext";
import { Textfit } from "react-textfit";

const Screen = () => {
  const { calc } = useCalcState();
  return (
    <Textfit max={70} className="screen" mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

export default Screen;
