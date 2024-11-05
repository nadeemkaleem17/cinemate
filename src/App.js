import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer, ScrollToTop } from "./components";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
