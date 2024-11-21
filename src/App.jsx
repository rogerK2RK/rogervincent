import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Series } from "./components/Pages/Series";
import { Films } from "./components/Pages/Films";
import { Film } from "./components/Pages/Film";

function App() {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/films" element={<Films />} />
                <Route path="/film/:id" element={<Film />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
