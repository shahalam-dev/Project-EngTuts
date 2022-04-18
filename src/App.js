import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import RegisterUser from "./components/RegisterUser/RegisterUser";
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
              <div style={{ marginTop: "200px" }}></div>
              <FAQ></FAQ>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div style={{ marginTop: "200px" }}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
