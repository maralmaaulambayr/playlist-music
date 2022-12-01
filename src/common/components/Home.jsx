import { Footer } from "./Footer";
import { Header } from "./Header";
import { LeftBar } from "./LeftBar";

export const Home = () => {
  return (
    <>
      <div className="grid-container">
        <LeftBar />
        <div
          style={{ width: "100%", height: "100vh", backgroundColor: "white" }}
        >
          <Header />
          <div>Home</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
