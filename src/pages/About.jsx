function About() {
    return (
        <div className="container mt-4">
            <h1>About This App</h1>
            <p>
                Welcome to the **Frontend-Only Recipe Generator**! This app allows you to generate personalized
                **grocery lists and recipes** based on your dietary preferences.
            </p>

            <h3>How It Works</h3>
            <ul>
                <li>Enter your **dietary preferences** and **food restrictions** in the form.</li>
                <li>Click **Generate** to send your request to OpenAI.</li>
                <li>View your personalized **grocery list and recipes**.</li>
                <li>Saved lists are stored **locally on your device**.</li>
            </ul>

            <h3>Data Storage & Privacy</h3>
            <p>
                This app **does not store personal data on a server**. All grocery lists and recipes are stored
                **locally in your browser's localStorage**. They will be **automatically deleted after 30 days**,
                or you can manually delete them from the "Saved Lists" page.
            </p>

            <h3>How to Delete Stored Lists</h3>
            <p>
                - To remove a **single grocery list**, click the **Delete** button next to it.<br />
                - To **clear all saved lists**, use the **Clear All** button on the "Saved Lists" page.
            </p>

            <p className="mt-4">
                <strong>Enjoy your customized grocery planning!</strong> 🛒🍽️
            </p>
        </div>
    );
}

export default About;
