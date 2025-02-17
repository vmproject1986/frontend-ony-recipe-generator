import { useState } from "react";

const GroceryList = ({ list }) => {
  // State to toggle the visibility of recipes
  const [showRecipes, setShowRecipes] = useState(false);

  return (
    <div className="card p-4 shadow-lg">
      <h3 className="text-center">Grocery List - Click to rename</h3>

      {/* Display grocery list items */}
      <ul className="list-group">
        {list.groceryList.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      {/* Display date of generation */}
      <p className="text-muted text-center mt-2">
        Generated on: {new Date().toLocaleDateString()}
      </p>

      {/* Toggle recipes visibility */}
      <button
        className="btn btn-secondary w-100 mt-2"
        onClick={() => setShowRecipes(!showRecipes)}
      >
        {showRecipes ? "Hide Recipes" : "See Recipes"}
      </button>

      {/* Show recipes when toggled */}
      {showRecipes && (
        <div className="mt-3">
          {list.recipes.map((recipe, index) => (
            <div key={index} className="card p-3 mb-2">
              <h4>{recipe.name}</h4>

              {/* Ingredients List */}
              <h5>Ingredients:</h5>
              <ul>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {/* Recipe Instructions */}
              <h5>Instructions:</h5>
              <p>{recipe.instructions.join(" ")}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GroceryList;
