import Header from "./components/Header";
import Weather from "./components/Weather";
import { MdLocationSearching } from "react-icons/md";
import Footer from "./components/store/Footer";
import Input from "./Input";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <main className="">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
