import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Series } from "./components/Pages/Series";
import { Films } from "./components/Pages/Films";
import { MovieInfo } from "./components/Movie/MovieInfo";

function App() {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/films" element={<Films />} />
                <Route path="/movie_info/:id" Component={ MovieInfo } />
            </Routes>
        </BrowserRouter>
  )
}

export default App
