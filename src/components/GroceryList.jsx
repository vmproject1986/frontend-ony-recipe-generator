import { useState } from "react";

const GroceryList = ({ list }) => {
    const [showRecipes, setShowRecipes] = useState(false);

    return (
        <div className="card p-4 shadow-lg">
            <h3 className="text-center">Grocery List - Click to rename</h3>
            <ul className="list-group">
                {list.groceryList.map((item, index) => (
                    <li key={index} className="list-group-item">{item}</li>
                ))}
            </ul>

            <p className="text-muted text-center mt-2">Generated on: {new Date().toLocaleDateString()}</p>

            <button className="btn btn-secondary w-100 mt-2" onClick={() => setShowRecipes(!showRecipes)}>
                {showRecipes ? "Hide Recipes" : "See Recipes"}
            </button>

            {showRecipes && (
                <div className="mt-3">
                    {list.recipes.map((recipe, index) => (
                        <div key={index} className="card p-3 mb-2">
                            <h4>{recipe.name}</h4>
                            <h5>Ingredients:</h5>
                            <ul>
                                {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
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
