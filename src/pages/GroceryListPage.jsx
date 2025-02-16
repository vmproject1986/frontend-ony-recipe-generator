import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GroceryListPage() {
  const navigate = useNavigate();
  const [lists, setLists] = useState([]); // State to store saved grocery lists
  const [showRecipes, setShowRecipes] = useState({}); // State to track recipe visibility

  // Load saved grocery lists from localStorage on component mount
  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem("groceryLists")) || [];
    setLists(savedLists);
  }, []);

  // Function to delete a single grocery list by ID
  const deleteList = (id) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
    localStorage.setItem("groceryLists", JSON.stringify(updatedLists));
  };

  // Function to clear all saved grocery lists
  const clearAllLists = () => {
    localStorage.removeItem("groceryLists");
    setLists([]);
  };

  // Function to toggle recipe visibility for a specific list
  const toggleRecipes = (id) => {
    setShowRecipes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="page-container">
      {/* Navigation Buttons */}
      <div
        className="d-flex justify-content-between w-100 mb-3"
        style={{ maxWidth: "800px" }}
      >
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Back to Form
        </button>
        <p>
          All recipes and lists are stored in your local browser and can be
          deleted at any time.
        </p>
        <button className="btn btn-danger" onClick={clearAllLists}>
          Clear All
        </button>
      </div>

      {/* Display Grocery Lists */}
      <div className="grocery-list-container">
        {lists.length > 0 ? (
          lists.map((list) => (
            <div key={list.id} className="card p-3 mb-3 shadow-lg grocery-list">
              {/* Display Grocery List Name & Timestamp */}
              <h3 className="text-center">{list.name || ""}</h3>
              <p>
                <strong>Generated on:</strong> {list.timestamp}
              </p>

              {/* Render Grocery List Items */}
              <h5>
                <strong>Potential Grocery Items:</strong>
              </h5>
              <ul>
                {list.groceryList?.length > 0 ? (
                  list.groceryList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <p>No grocery items available.</p>
                )}
              </ul>

              {/* Show/Hide Recipes Button */}
              <button
                className="btn btn-info mt-2 w-100"
                onClick={() => toggleRecipes(list.id)}
              >
                {showRecipes[list.id] ? "Hide Recipes" : "Show Recipes"}
              </button>

              {/* Display Recipes Only When "Show Recipes" is Clicked */}
              {showRecipes[list.id] && (
                <div className="mt-3 scrollable">
                  <h4 className="text-center">Recipes:</h4>
                  {list.recipes?.length > 0 ? (
                    list.recipes.map((recipe, index) => (
                      <div key={index} className="card p-3 mb-2 shadow-sm">
                        <h5>{recipe.name}</h5>
                        <p>
                          <strong>Ingredients:</strong>
                        </p>
                        <ul>
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                        <p>
                          <strong>Instructions:</strong>
                        </p>
                        <ol>
                          {recipe.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    ))
                  ) : (
                    <p>No recipes available.</p>
                  )}
                </div>
              )}

              {/* Delete List Button */}
              <button
                className="btn btn-warning mt-2 w-100"
                onClick={() => deleteList(list.id)}
              >
                Delete List
              </button>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No saved lists found.</p>
        )}
      </div>
    </div>
  );
}

export default GroceryListPage;
