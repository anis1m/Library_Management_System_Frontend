import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";
import UserDashboard from "./Components/user/userDashboard";
import AdminDashboard from "./Components/admin/AdminDashboard";

function App() {
  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/user" element={<UserDashboard />}>
          <Route path="books" />
        </Route>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="books" />
        </Route>
      </Routes>
    </PrimeReactProvider>
  );
}

export default App;
