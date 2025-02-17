import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryListPage from "./pages/GroceryListPage";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page - Main Form */}
                <Route path="/" element={<LandingPage />} />

                {/* Grocery List Page - Displays Generated Lists and Recipes */}
                <Route path="/grocery-list" element={<GroceryListPage />} />

                {/* About Page - App Information */}
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
