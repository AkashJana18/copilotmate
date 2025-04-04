
# CopilotMate
![GitHub Repo stars](https://img.shields.io/github/stars/AkashJana18/copilotmate?style=social)
![GitHub forks](https://img.shields.io/github/forks/akashjana18/copilotmate?style=social)
![YouTube Video Views](https://img.shields.io/youtube/views/qPVRPUH8ewU?style=social)
![GitHub License](https://img.shields.io/github/license/akashjana18/copilotmate?style=social)



![image](https://github.com/user-attachments/assets/31b93ec2-94c9-4949-96a3-160018fd4311)
CopilotMate is an open-source personal assistant designed to streamline productivity with an intuitive interface and a suite of essential tools. Whether you're organizing your tasks, tracking expenses, or studying efficiently, CopilotMate has your back! Built using **CopilotKit**, it integrates seamlessly to help you stay organized and focused.

> **Note:**
> Due to major updates in CoAgents and CopilotKit AI, the agent may not function as expected. Please review the latest changes before use. 


### 🛠️ Technologies Being Used  
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/CopilotKit-🪁-black" alt="CopilotKit" />
  <img src="https://img.shields.io/badge/Framer%20Motion-0055FF?logo=framer&logoColor=white" alt="Framer Motion" />
</p>

- **CopilotKit** (for AI functionalities)
- **Next.js** (for the frontend)
- **Tailwind CSS** (for styling)
- **Groq SDK** (for language models)
- **Llama model** (for AI coagents)

### [Watch video on YouTube](https://youtu.be/qPVRPUH8ewU)

### Screenshot 
<img src="https://github.com/user-attachments/assets/68df962c-9bc2-48ae-9ffd-3c073f13e083" alt="Image 1" width="200"/>
<img src="https://github.com/user-attachments/assets/5d78657c-fa78-492c-bbf8-d2dcdf6fa699" alt="Image 2" width="200"/>
<img src="https://github.com/user-attachments/assets/1fe3ea5e-4a34-4755-a042-d327adc17c8e" alt="Image 3" width="200"/>
<img src="https://github.com/user-attachments/assets/0f1fa245-10bb-441c-be77-162a04f941d8" alt="Image 4" width="200"/>
<img src="https://github.com/user-attachments/assets/10814ebf-95ed-4520-966c-5e5854c46335" alt="Image 5" width="200"/>
<img src="https://github.com/user-attachments/assets/cee8e3ca-ecfa-43d1-adf0-8f8972c4c14b" alt="Image 6" width="200"/>
<img src="https://github.com/user-attachments/assets/39e2087c-0f7d-4a69-9fbe-e30415fd7cbe" alt="Image 7" width="200"/>
<img src="https://github.com/user-attachments/assets/9919059e-71ce-4bb0-9f50-cc9f351078be" alt="Image 8" width="200"/>
<img src="https://github.com/user-attachments/assets/0ccd162a-c4f7-4d79-a969-a124222f5bf6" alt="Image 9" width="200"/>
<img src="https://github.com/user-attachments/assets/cb118098-d975-41fe-b1d8-0387d312ca32" alt="Image 10" width="200"/>
<img src="https://github.com/user-attachments/assets/d5ba6011-71e3-4f7b-8566-e27cc83c35ac" alt="Image 11" width="200"/>


## Blog
Read more about CopilotMate in our detailed blog posts:
1. [CopilotMate Blog](https://dev.to/akashjana/future-of-productivity-meet-copilotmate-3k7i) 
2. [CopilotMate Development Journey](https://dev.to/akashjana/how-i-integrated-copilotkit-ai-into-copilotmate-23gm)
3. Also, don't forget to support on [Twitter](https://x.com/Akashj_01/status/1843662122917736475) and [Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:7254023926891065346/).


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](https://youtu.be/qPVRPUH8ewU?si=R9TqpgmkYOL8n5lf)
- [Contributing](#contributing)
- [License](#license)

## Features

CopilotMate currently supports the following features:

- **To-Do Assistant**: Create, update, and manage your tasks effortlessly.
- **Spreadsheet**: Organize your data in a spreadsheet format.
- **Chatbot**: Engage with a chatbot to answer your queries and assist in tasks.
- **Expense Tracker**: Track and categorize your daily expenses with an improved dark-themed UI and glass effect for a sleek look.
- **StudyBuddy Coagent**: A coagent that helps with study planning, note-taking, and quiz creation for focused learning sessions.

**Upcoming Updates**:
- **Calendar**: Keep up with important dates and events (coming soon!).

## What's New in v2.0?

- **StudyBuddy Coagent**: Added a StudyBuddy tool for note-taking and quiz creation to boost your learning productivity.
- **Expense Tracker**: Now available with a polished dark UI and glass effect to make tracking your expenses more enjoyable.
- **Improved UI/UX**: Revamped interface for a smoother user experience and a more modern look.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Next.js](https://nextjs.org/)
- [CopilotKit](https://docs.copilotkit.ai/what-is-copilotkit)

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/copilotmate.git
   ```

## Running the Agent

First, install the dependencies:

```bash
cd agent
poetry install
```

Then, create a `.env` file inside `./agent` with the following:

```bash
GROQ_API_KEY=...
TAVILY_API_KEY=...
```

Then, run the demo:

```bash
poetry run demo
```

2. Navigate to the project directory:

   ```bash
   cd copilotmate
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```bash
   http://localhost:3000
   ```

## Usage

Once installed, you can access the following features:

- **To-Do Assistant**: Navigate to `/todo` to manage your tasks. You can add, edit, mark complete, and delete tasks.
  
- **Spreadsheet**: Access the spreadsheet at `/spreadsheet` to manage your data. Organize your records using rows and columns.

- **Chatbot**: Go to `/chatbot` to interact with the AI-powered assistant for general queries and task automation.

- **Expense Tracker**: Visit `/expense-tracker` to start tracking your expenses. The improved dark UI will keep you focused on your financials with style.

- **StudyBuddy Coagent**: Head over to `/studybuddy` for study tools that help you plan, create quizzes, and organize notes effectively.

More routes and features are currently being developed.

## Contributing

We welcome contributions from the community! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a clear description of your changes.

Please refer to our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


