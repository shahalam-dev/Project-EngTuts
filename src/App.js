import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import ServiceCard from "./components/ServiceCard/ServiceCard";

function App() {
  return (
    <div className="container">
      <Nav></Nav>
      <Banner></Banner>
      <ServiceCard></ServiceCard>
    </div>
  );
}

export default App;
