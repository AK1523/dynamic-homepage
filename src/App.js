import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homePage/homePage";
import "./App.css";
import AdminPanel from "./components/admin/adminPanel";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
