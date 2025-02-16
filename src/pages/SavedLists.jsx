import { useState, useEffect } from "react";

function SavedLists() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const savedLists = JSON.parse(localStorage.getItem("groceryLists")) || [];
        setLists(savedLists);
    }, []);

    return (
        <div className="container mt-4">
            <h1>Past Generated Lists</h1>
            {lists.length > 0 ? (
                lists.map((list) => (
                    <div key={list.id} className="card p-3 mb-3 shadow-lg">
                        <h3>Grocery List</h3>
                        <p><strong>Generated on:</strong> {list.timestamp}</p>
                        <p><strong>Weekly Grocery List:</strong> {list.groceryList.join(", ")}</p>
                    </div>
                ))
            ) : (
                <p>No saved lists available.</p>
            )}
        </div>
    );
}

export default SavedLists;
