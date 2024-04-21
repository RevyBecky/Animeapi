import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { CardDetail } from "./pages/cardDetail";

function App() {
  return (
    <div style={{ backgroundImage: "url(./components/fone.jpg)" }} >
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/:id' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/anime/:id' element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
