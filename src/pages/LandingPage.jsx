import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOpenAIResponse } from "../utils/api";
import Form from "../components/Form";

function LandingPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles form submission, fetches generated grocery lists & recipes,
     * and stores them in local storage.
     */
    const handleSubmit = async (formData) => {
        setIsLoading(true);
        const response = await fetchOpenAIResponse(formData);
        setIsLoading(false);

        if (response.error) {
            alert(response.error);
            return;
        }

        // Retrieve existing lists from localStorage or initialize an empty array
        const existingLists = JSON.parse(localStorage.getItem("groceryLists")) || [];

        // Create a new entry with a unique timestamped ID
        const newEntry = {
            id: Date.now(),
            timestamp: new Date().toLocaleDateString(),
            groceryList: response.groceryList,
            recipes: response.recipes,
        };

        // Store the newest list at the top
        localStorage.setItem("groceryLists", JSON.stringify([newEntry, ...existingLists]));

        // Redirect to the grocery list page
        navigate("/grocery-list");
    };

    return (
        <div className="page-container">
            <h1>Welcome to the Recipe Generator</h1>
            <p>Fill out the form to generate grocery lists and recipes.</p>

            {/* Button to view previously saved lists */}
            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate("/grocery-list")}
            >
                View Saved Lists
            </button>

            {/* Form Component */}
            <Form onSubmit={handleSubmit} isLoading={isLoading} />

            {/* Simple Text Link to About Page */}
            <p className="text-center mt-3">
                <a href="/about">About</a>
            </p>
        </div>
    );
}

export default LandingPage;
