function Recipe({ title, ingredients, instructions }) {
    return (
        <div className="card p-3 mb-3">
            <h4 className="card-title">{title || "Recipe Title"}</h4>
            <h5 className="card-subtitle mb-2 text-muted">Ingredients:</h5>
            <ul className="list-group list-group-flush">
                {ingredients.map((item, index) => <li key={index} className="list-group-item">{item}</li>)}
            </ul>
            <h5 className="mt-3">Instructions:</h5>
            <p>{instructions.join(" ")}</p>
            <button className="btn btn-danger">Delete Recipe</button>
        </div>
    );
}

export default Recipe;
