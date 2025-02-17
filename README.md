# React + Vite

# 🍽️ Frontend-Only Recipe Generator

🚀 **Generate personalized grocery lists and recipes instantly!**
This lightweight web app allows users to enter dietary preferences and receive a structured grocery list and five recipes, all stored locally in the browser.

---

## 🛠️ **Features**
✅ Generate structured grocery lists based on user preferences
✅ Receive five unique recipes per list
✅ Save grocery lists & recipes locally (no database required)
✅ Delete single lists or clear all saved lists
✅ Fully responsive and mobile-friendly
✅ No backend – runs entirely in the browser!

---

## 💻 **Live Demo**
🔗 **[Try it Now!](#)** *(Add  deployed URL here when ready)*

---

## 🏗️ **Installation & Running Locally**
If you'd like to clone and run the project on your own computer, follow these steps:

### **1️⃣ Prerequisites**
Make sure you have the following installed:
- **[Node.js](https://nodejs.org/) (LTS version recommended)**
- **[Git](https://git-scm.com/)**
- A web browser (Chrome, Firefox, Edge, etc.)

### **2️⃣ Clone the Repository**
Open your terminal and run:
```sh
git clone https://github.com/vmproject1986/frontend-only-recipe-generator.git
cd frontend-only-recipe-generator
3️⃣ Install Dependencies
Inside the project directory, install the required packages:

sh
Copy
Edit
npm install
4️⃣ Create an .env File (Optional)
This app makes API calls to OpenAI. If you want to test it with your own API key, create a .env file in the root directory:

sh
Copy
Edit
touch .env
Inside .env, add:

env
Copy
Edit
VITE_OPENAI_KEY=your_openai_api_key_here
🔹 If you don't have an OpenAI key, the app will still function but won't generate lists dynamically.

5️⃣ Start the Development Server
Run the app locally:

sh
Copy
Edit
npm run dev
Then, open http://localhost:5173/ in your browser.

🚀 Building for Production
To create an optimized production build, run:

sh
Copy
Edit
npm run build
This will generate a dist/ folder containing the static files ready for deployment.

📂 Project Structure
plaintext
Copy
Edit
frontend-only-recipe-generator/
│── public/            # Static assets
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # React entry point
│── .gitignore         # Git ignore rules
│── package.json       # Project dependencies & scripts
│── README.md          # Project documentation (this file)

🎨 Tech Stack
React – Component-based UI
Vite – Fast build tool
Bootstrap – Responsive design
React Router – Page navigation
OpenAI API – Generates grocery lists & recipes
🛠️ Troubleshooting
Issue: Getting a blank page or errors after running npm run dev?
🔹 Solution:

Make sure you're using Node.js LTS version.
Run npm install again to ensure all dependencies are installed.
If using an OpenAI key, verify it's correct in .env.
📜 License
This project is open-source and available under the MIT License.

📧 Support & Contributions
Have a suggestion or found a bug? Open an issue or submit a pull request!
For questions, reach out via GitHub Issues.

🔗 Made with ❤️ by Matthew
