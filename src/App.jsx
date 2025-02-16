import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryListPage from "./pages/GroceryListPage";
import SavedLists from "./pages/SavedLists";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/grocery-list" element={<GroceryListPage />} />
                <Route path="/saved-lists" element={<SavedLists />} />
            </Routes>
        </Router>
    );
}

export default App;
