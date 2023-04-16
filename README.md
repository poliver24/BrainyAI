# BrainyAI

![BrainyAI Logo](logo.png)

BrainyAI is a full-stack app that leverages the OpenAI API to create customized learning plans for learning anything, with a focus on teaching Python programming. It's built with Django on the backend and React on the frontend.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Contact](#contact)

## Introduction

BrainyAI is an MVP (Minimum Viable Product) designed to help users learn Python programming and other subjects through personalized learning plans. By harnessing the power of OpenAI's ChatGPT, BrainyAI creates tailored learning paths to cater to individual needs, learning styles, and preferences.

## Features

- Customized learning plans using OpenAI's ChatGPT
- Python programming course with interactive coding exercises
- User authentication and profile management
- Progress tracking and analytics
- Responsive and intuitive UI for an enhanced learning experience

## Getting Started

Follow the instructions below to set up the project on your local machine.

### Prerequisites

- Python 3.8 or higher
- Node.js 14.0 or higher
- npm 6.14 or higher
- Django 3.2 or higher
- React 17.0 or higher
- An active OpenAI API Key

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/BrainyAI.git
```

2. Create and activate a virtual environment:

```
python -m venv venv
source venv/bin/activate
```

3. Install the required Python packages:

```
pip install -r requirements.txt
```

4. Install the required Node.js packages:

```
cd frontend
npm install
```

5. Create a `.env` file in the root folder and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key
```

6. Apply Django migrations:

```
python manage.py migrate
```

## Usage

1. Start the Django backend server:

```
python manage.py runserver
```

2. Start the React frontend server:

```
cd frontend
npm start
```

3. Open your browser and visit `http://localhost:3000` to start using BrainyAI.

## Contribute

We welcome any contributions to improve BrainyAI! To contribute, please:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Commit your changes
4. Create a pull request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact

If you have any questions or suggestions, please feel free to open an issue or reach out to the project maintainer:

- Your Name - your.email@example.com

Happy learning with BrainyAI!
