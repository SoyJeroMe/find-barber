import Footer from "./components/principals/Footer";
import Navbar from "./components/principals/Navbar";
import Principal from "./components/principals/Principal";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Principal />
      <Footer />
    </div>
  );
};

export default App;
