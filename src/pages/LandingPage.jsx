import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOpenAIResponse } from "../utils/api";
import Form from "../components/Form";

function LandingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (formData) => {
        setIsLoading(true);
        const response = await fetchOpenAIResponse(formData);
        setIsLoading(false);

        if (response.error) {
            alert(response.error);
            return;
        }

        const existingLists = JSON.parse(localStorage.getItem("groceryLists")) || [];
        const newEntry = {
            id: Date.now(),
            timestamp: new Date().toLocaleDateString(),
            groceryList: response.groceryList,
            recipes: response.recipes,
        };
        localStorage.setItem("groceryLists", JSON.stringify([newEntry, ...existingLists])); // NEWEST FIRST

        navigate("/grocery-list");
    };

    return (
        <div className="page-container">
            <h1>Welcome to the Recipe Generator</h1>
            <p>Fill out the form to generate grocery lists and recipes.</p>

            {/* View Saved Lists Button */}
            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate("/grocery-list")}
            >
                View Saved Lists
            </button>

            <Form onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
    );
}

export default LandingPage;
