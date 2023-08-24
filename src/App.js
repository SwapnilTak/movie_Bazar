import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/" exact element={</>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
