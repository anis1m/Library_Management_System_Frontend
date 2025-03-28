import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";

function App() {


  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route  index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>
      </Routes>
      
    </PrimeReactProvider>
  );
}

export default App;
