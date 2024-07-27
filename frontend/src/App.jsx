import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import WorkoutSessions from "./components/WorkoutSessions";
import Footer from "./components/Footer";
import BMICalculator from "./components/BMICalculator";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <BMICalculator />
      <Contact />

      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
}

export default App;
