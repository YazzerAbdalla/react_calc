import { useCalcState } from "../contexts/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "eq",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};
const Botton = ({ value, key }) => {
  const { calc, setCalc } = useCalcState();

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };
  // User click C
  const resetClick = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };
  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
  // User click number
  const handleClickBotton = () => {
    console.log("hi");
    const numberString = value.toString();
    let numberValue;
    if (numberString === "0" && calc.num === "0") {
      numberValue = "0";
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  // User click invert btn
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };

  // User click equal
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "/": (a, b) => a / b,
          x: (a, b) => a * b,
          "%": (a, b) => a % b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
      });
    }
  };
  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      C: resetClick,
      "/": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "%": signClick,
      "=": equalsClick,
      "+-": invertClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickBotton();
    }
  };
  return (
    <button onClick={handleBtnClick} className={` ${getStyleName(value)} btn`}>
      {value}
    </button>
  );
};

export default Botton;
