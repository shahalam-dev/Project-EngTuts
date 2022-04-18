import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import ServicesSec from "./components/ServicesSec/ServicesSec";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner></Banner>
              <ServicesSec></ServicesSec>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div style={{ marginTop: "200px" }}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
