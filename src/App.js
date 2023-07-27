import { Fragment } from "react";
import { Counter } from "./views/Counter";

function App() {
  return (
    <>
      <Counter />
      <Counter valorInicial={5} increaseDecrease={2}/>
      <Counter valorInicial={10} increaseDecrease={3} />
    </>
  );
}

export default App;
