import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContent, Home, Search } from "./common/components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Playlist } from "./common/components/Playlist";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route path="/" element={<Home />} />
            <Route path="/Playlist" element={<Playlist />} />
            <Route path="/Search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
