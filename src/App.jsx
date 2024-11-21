import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Provider } from "react-redux";
import { Error } from "./components/Pages/Error";
import { Navbar } from "./components/Navbar/Navbar";
import { Series } from "./components/Pages/Series";
import { Serie } from "./components/Pages/Serie";
import { Films } from "./components/Pages/Films";

import { store } from "./app/store"


import { Film } from "./components/Pages/Film";


function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>

      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/serie/:id" element={<Serie />} />
          <Route path="/films" element={<Films />} />
          <Route path="/*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  </Provider>
    

  )
}

export default App
