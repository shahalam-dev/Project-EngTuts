import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import ServiceCard from "./components/ServiceCard/ServiceCard";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Banner></Banner>
      <ServiceCard></ServiceCard>
      <NotFound></NotFound>
      <About></About>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
}

export default App;
