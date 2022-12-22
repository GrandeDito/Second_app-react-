import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prova from "./Components/Prova";
import NavBar from "./Components/NavBar";
import Mouse from "./Components/Mouse";
import Fetch from "./Components/Fetch";
import Login from "./Components/Login";
import Homepage from './Components/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/prova" element={<Prova></Prova>} />
          <Route path="/mouse" element={<Mouse></Mouse>} />
          <Route path="/fetch" element={<Fetch></Fetch>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/home" element={<Homepage></Homepage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
