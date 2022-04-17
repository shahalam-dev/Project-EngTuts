import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
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
    </div>
  );
}

export default App;
