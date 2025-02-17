import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryListPage from "./pages/GroceryListPage";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/grocery-list" element={<GroceryListPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
