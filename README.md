
# CopilotMate

![image](https://github.com/user-attachments/assets/814f1b4f-821d-47c9-9947-91abf0e2e825)

CopilotMate is an open-source personal assistant designed to streamline productivity with an intuitive interface and a suite of essential tools. Whether you're organizing your tasks, tracking expenses, or studying efficiently, CopilotMate has your back! Built using **CopilotKit**, it integrates seamlessly to help you stay organized and focused.

[![Watch the video](https://img.youtube.com/vi/qPVRPUH8ewU/maxresdefault.jpg)](https://youtu.be/qPVRPUH8ewU)
### [Watch video on YouTube](https://youtu.be/qPVRPUH8ewU)


## Blog
Read more about CopilotMate in our detailed blog posts:
1. [CopilotMate Blog](https://dev.to/akashjana/future-of-productivity-meet-copilotmate-3k7i) 
2. [CopilotMate Development Journey](https://dev.to/akashjana/how-i-integrated-copilotkit-ai-into-copilotmate-23gm)
3. Also, don't forget to support on [Twitter](https://x.com/Akashj_01/status/1843662122917736475) and [Linkedin](https://www.linkedin.com/feed/update/urn:li:activity:7254023926891065346/).


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
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


