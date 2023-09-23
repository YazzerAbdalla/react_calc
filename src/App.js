import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import BtnBox from "./components/BtnBox";
import Botton from "./components/Botton";
import { CalcProvider } from "./contexts/CalcContext";

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <BtnBox>
          {btnValues.flat().map((btn, index) => (
            <Botton value={btn} key={index} />
          ))}
        </BtnBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
