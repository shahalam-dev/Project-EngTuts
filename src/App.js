import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
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
    </div>
  );
}

export default App;
