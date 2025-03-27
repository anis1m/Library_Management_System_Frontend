import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PrimeReactProvider>
      <Login />
    </PrimeReactProvider>
  );
}

export default App;
