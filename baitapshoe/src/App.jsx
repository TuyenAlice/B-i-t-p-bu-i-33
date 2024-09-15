import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BTShoe } from "./BTShoe/BTShoe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BTShoe />
    </>
  );
}

export default App;
