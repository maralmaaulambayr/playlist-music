import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainContent, Home, LeftBar, Footer,Header } from "./common/components";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<Header />} />
          <Route path="/" element={<LeftBar />} />
          <Route path="/" element={<Footer />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
