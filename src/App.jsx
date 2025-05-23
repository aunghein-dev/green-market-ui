import Content from "./components/Content";
import Nav from "./components/Nav";
import TopSelling from "./components/TopSelling";
import CustomerReview from "./components/CustomerReview";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App max-w-[900px] mx-auto px-4 ">
        <main>
          <Nav />
          <Content />
          <TopSelling />
          <CustomerReview />
          <BestO2 />
        </main>
      </div>

      {/* Full-width footer outside the max-width container */}
      <Footer />
    </>
  );
}

export default App;
