const fetchOpenAIResponse = async (formData) => {
    const apiKey = import.meta.env.VITE_OPENAI_KEY;
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    if (!apiKey) {
        console.error("Missing OpenAI API Key! Make sure your .env file is configured correctly.");
        return { error: "API Key is missing." };
    }

    // Structured prompt ensuring AI correctly understands user input
    const prompt = `
You are an AI that generates a structured grocery list and 5 recipes based on the user preferences.
Ensure recipes only contain ingredients from the grocery list.

Use the following user preferences:
- Allergies: ${formData.allergies || "None"}
- Dietary Restrictions: ${formData.dietaryRestrictions || "None"}
- Dietary Preferences: ${formData.dietaryPreferences || "None"}
- Preferred Foods: ${formData.preferredFoods || "None"}
- Lifestyle: ${formData.lifestyle || "None"}
- Health Goals: ${formData.healthGoals || "None"}
- Budget: ${formData.budget || "Not specified"}
- Additional Info: ${formData.additionalInfo || "None"}

---

### **Response Format (Follow EXACTLY)**
- **Grocery List Name**
- **** (separator)
- **List of grocery items (one per line, with quantity)**
- **** (separator)
- **5 Recipes, each with:**
  - **Recipe Name**
  - **Ingredients (list with quantities)**
  - **Instructions (numbered steps)**

---

### **Example Response (Follow exactly)**
Healthy Meal Plan
****
- 1 lb Chicken breast
- 2 cups Spinach
- 3 oz Almonds
- 4 slices Cheddar cheese
- 1 dozen Eggs
****
**Recipe 1: Chicken Stir Fry**
**Ingredients:**
- 1 lb Chicken breast, sliced
- 2 cups Broccoli, chopped
- 1 tbsp Olive oil
- 1 tsp Garlic, minced
- Salt & Pepper to taste

**Instructions:**
1. Heat oil in a pan over medium heat.
2. Add chicken, cook until no longer pink.
3. Add broccoli, season, and stir-fry for 3-4 minutes.
4. Serve hot.
...
(Repeat for 5 recipes)

**IMPORTANT:** Only return the structured list and recipes, nothing else.
`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 1000, // Ensure complete response
            }),
        });

        if (!response.ok) {
            console.error("OpenAI API Error:", response.status, response.statusText);
            return { error: `Error: ${response.status} - ${response.statusText}` };
        }

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
            return { error: "Error: No response from OpenAI." };
        }

        return parseGroceryListAndRecipes(data.choices[0].message.content);
    } catch (error) {
        console.error("Error fetching data from OpenAI:", error);
        return { error: "Error fetching response. Please try again." };
    }
};

// Parsing function to properly extract grocery list and recipes
const parseGroceryListAndRecipes = (responseText) => {
    const sections = responseText.split("****").map(s => s.trim());

    if (sections.length < 3) {
        console.error("Invalid response format:", responseText);
        return { error: "Invalid response format. Could not parse." };
    }

    const groceryListName = sections[0]; // First part is the list name
    const groceryList = sections[1]
        .split("\n")
        .map(item => item.trim())
        .filter(item => item !== "");

    const recipesText = sections.slice(2).join("\n"); // Combine all remaining parts as recipes
    const recipeSections = recipesText.split("**Recipe");

    const recipes = recipeSections.slice(1).map(recipe => {
        const parts = recipe.split("**Ingredients:**");
        if (parts.length < 2) return null;

        const [namePart, ingredientsAndInstructions] = parts;
        const name = "Recipe" + namePart.trim();

        const [ingredientsPart, instructionsPart] = ingredientsAndInstructions.split("**Instructions:**");
        const ingredients = ingredientsPart
            ? ingredientsPart.trim().split("\n").filter(line => line.trim() !== "")
            : [];
        const instructions = instructionsPart
            ? instructionsPart.trim().split("\n").filter(line => line.trim() !== "")
            : [];

        return { name, ingredients, instructions };
    }).filter(Boolean);

    return { groceryListName, groceryList, recipes };
};


export { fetchOpenAIResponse };
