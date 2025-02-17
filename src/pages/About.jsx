import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Back Button to Return to Landing Page */}
            <button className="btn btn-primary mb-3" onClick={() => navigate("/")}>
                Back
            </button>

            <h1>About This App</h1>
            <p>
                Welcome to the <strong>Frontend-Only Recipe Generator</strong>! This app allows you to generate personalized
                <strong> grocery lists and recipes </strong> based on your dietary preferences.
            </p>

            {/* How It Works Section */}
            <h3>How It Works</h3>
            <ul>
                <li>Enter your <strong>dietary preferences</strong> and <strong>food restrictions</strong> in the form.</li>
                <li>Click <strong>Generate</strong> to send your request to OpenAI.</li>
                <li>View your personalized <strong>grocery list and recipes</strong>.</li>
                <li>Saved lists are stored <strong>locally on your device</strong>.</li>
            </ul>

            {/* Data Storage & Privacy Section */}
            <h3>Data Storage & Privacy</h3>
            <p>
                This app <strong>does not store personal data on a server</strong>. All grocery lists and recipes are stored
                <strong> locally in your browser's localStorage</strong>. They will be <strong>automatically deleted after 30 days</strong>,
                or you can manually delete them from the "Saved Lists" page.
            </p>

            {/* Instructions for Deleting Lists */}
            <h3>How to Delete Stored Lists</h3>
            <p>
                - To remove a <strong>single grocery list</strong>, click the <strong>Delete</strong> button next to it.<br />
                - To <strong>clear all saved lists</strong>, use the <strong>Clear All</strong> button on the "Saved Lists" page.
            </p>

            <p className="mt-4">
                <strong>Enjoy your customized grocery planning!</strong> 🛒🍽️
            </p>
        </div>
    );
}

export default About;
