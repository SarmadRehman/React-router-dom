import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
