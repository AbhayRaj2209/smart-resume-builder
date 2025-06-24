# Smart Resume Builder with AI Suggestions

An intelligent, modern resume builder that lets users create professional resumes with AI-generated suggestions. Built using the **MERN Stack** and **OpenAI GPT-3.5 API**

## 🛠️ Features

- ✍️ Easy-to-use Resume Editor
- 🤖 **AI Suggestions** for resume sections (Summary, Skills, Experience etc.)
- 💾 Save Resume to MongoDB
- 📄 **PDF Download** (Print-Ready Format)
- 🌗 Light/Dark Mode *(Coming Soon)*
- 🔐 User Login/Signup *(Coming Soon)*

---

## 🧰 Tech Stack

| Tech | Description |
|------|-------------|
| ⚛️ React.js | Frontend framework |
| 🖥️ Node.js + Express | Backend server |
| 🍃 MongoDB | NoSQL Database |
| 🧠 OpenAI API | AI Suggestions (GPT-3.5) |
| 🖨️ react-to-print | PDF download |
| 🎨 CSS | Basic styling |

---
|

## 📦 How to Run Locally

### 1. Clone the repository
git clone https://github.com/AbhayRaj2209/smart-resume-builder.git
cd smart-resume-builder

2. Start the backend:-
   
cd resume-builder-backend
npm install
npm run dev
Create a .env file:
PORT=5000
MONGO_URI=your_mongo_uri
OPENAI_API_KEY=your_openai_key

3. Start the frontend
cd ../resume-builder-frontend
npm install
npm run dev

 API Routes
Method	Route	Description
POST	/api/resume/suggestions	Get AI suggestions
POST	/api/resume/save	Save resume to MongoDB

🙋‍♂️ Author
Abhay Ra:https://www.linkedin.com/in/abhay-raj-650905268
LinkedIn
📧 abhayraj3051@gmail.com
📱 +91 9076906408

⭐️ Show your support
If you like this project, please ⭐ the repo and share it.
Pull requests, ideas, and feedback are always welcome!
