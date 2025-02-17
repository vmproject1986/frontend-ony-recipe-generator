import { useState } from "react";

function Form({ onSubmit, isLoading, hasResults }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    allergies: "",
    dietaryRestrictions: "",
    dietaryPreferences: "",
    preferredFoods: "",
    lifestyle: "",
    healthGoals: "",
    budget: "",
    additionalInfo: "",
  });

  // Handles input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevents multiple submissions while loading

    alert(
      "Generating your grocery list & recipes... This may take up to 60 seconds... Please wait!",
    );

    await onSubmit(formData);

    // Clears form fields after submission
    setFormData({
      allergies: "",
      dietaryRestrictions: "",
      dietaryPreferences: "",
      preferredFoods: "",
      lifestyle: "",
      healthGoals: "",
      budget: "",
      additionalInfo: "",
    });
  };

  return (
    <div
      className={`card p-4 shadow-lg transition-all ${hasResults ? "move-left" : "centered"}`}
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <h2 className="text-center">Generate Your Grocery List & Recipes</h2>
      <p className="text-center text-muted">
        All fields are OPTIONAL. The more details you provide, the more
        customized your list will be.
      </p>

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="form-control"
              placeholder={`Enter any ${key.toUpperCase()} or leave blank`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Grocery List & Recipes"}
        </button>
      </form>
    </div>
  );
}

export default Form;
