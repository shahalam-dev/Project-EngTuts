import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Checkout from "./components/Checkout/Checkout";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ServicesSec from "./components/ServicesSec/ServicesSec";
import ThanksGiving from "./components/ThanksGiving/ThanksGiving";
import { CoursesProvider } from "./contexts/CoursesContext";

function App() {
  return (
    <CoursesProvider>
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
          <Route
            path="/checkout/:id"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/thanks" element={<ThanksGiving />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div style={{ marginTop: "200px" }}></div>
        <Footer></Footer>
      </div>
    </CoursesProvider>
  );
}

export default App;
