# DataAnalyst: AI-Powered Data Analysis with LangChain, CrewAI, and LangGraph

## Overview

**DataAnalyst** is an AI-driven application that automates data ingestion, analysis, and visualization using **LangChain**, **CrewAI**, and **LangGraph**. The application is built with a modular agentic architecture, where specialized agents handle different parts of the data analysis pipeline. Using advanced AI techniques, **DataAnalyst** transforms raw data into meaningful insights, making data analysis intuitive, scalable, and accessible.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Agentic Architecture](#agentic-architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automated Data Processing**: Handles data cleaning, preprocessing, and feature engineering automatically.
- **Insight Generation**: Delivers insights from the data using natural language queries and advanced language models.
- **Interactive Visualizations**: Generates both interactive and static data visualizations to aid in data understanding.
- **Agentic Workflow**: Uses an agentic architecture for modular, scalable, and robust data analysis operations.
- **Seamless User Experience**: Web-based interface for data uploads and analysis interactions.
- **Continuous Feedback and Improvement**: Collects user feedback to iteratively enhance the accuracy and relevance of analysis.

## Tech Stack

- **Backend**: FastAPI, LangChain, LangGraph
- **Frontend**: React
- **AI Agents and Orchestration**: CrewAI for agent management and coordination
- **Machine Learning**: Integration with GPT-4 or other large language models
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Deployment**: Docker, AWS Free Tier, Google Cloud Free Tier
- **Version Control**: Git, GitHub

## Agentic Architecture

The architecture is composed of multiple specialized agents, each managing a distinct task in the data analysis pipeline. This enables modularity, maintainability, and scalability:

- **Query Understanding Agent**: Interprets user queries and extracts intent using natural language understanding.
- **Task Planning Agent**: Breaks down user intent into executable tasks and coordinates the execution order.
- **Data Retrieval Agent**: Handles data ingestion, validation, and preprocessing of raw datasets.
- **Code Generation Agent**: Dynamically creates Python code based on data characteristics and user requests.
- **Execution Agent**: Executes the generated code in a secure environment and manages computational resources.
- **Analysis Agent**: Performs statistical analysis and interprets data output.
- **Visualization Agent**: Generates interactive visualizations to present the insights.
- **Response Formulation Agent**: Synthesizes analysis results into user-friendly responses.
- **Feedback Improvement Agent**: Collects feedback from the user and iteratively improves the system.
- **Error Handling Agent**: Manages exceptions, ensuring smooth error recovery and user experience.

**LangGraph** manages the sequential and conditional flow of tasks, while **CrewAI** handles agent collaboration, performance tracking, and coordination.

## Project Structure

```plaintext
DataAnalyst/
├── agents/                         # Specialized agents for discrete tasks
│   ├── query_understanding_agent.py # Processes user queries
│   ├── task_planning_agent.py      # Coordinates task execution
│   ├── data_retrieval_agent.py     # Manages data ingestion and preprocessing
│   ├── code_generation_agent.py    # Generates code dynamically for tasks
│   ├── execution_agent.py          # Executes generated code and handles computation
│   ├── analysis_agent.py           # Conducts data analysis
│   ├── visualization_agent.py      # Generates visualizations
│   ├── response_formulation_agent.py# Forms insights and responses
│   ├── feedback_improvement_agent.py# Collects feedback and improves the system
│   └── error_handling_agent.py     # Handles errors and exceptions
├── backend/
│   ├── data/
│   │   ├── loader.py               # Data loading functions
│   │   ├── cleaner.py              # Data cleaning and validation utilities
│   │   └── transformer.py          # Data transformation and feature engineering
│   ├── models/
│   │   ├── langchain_model.py      # LangChain interaction utilities
│   │   └── crewai_model.py         # CrewAI integration for agent management
│   ├── inference/
│   │   ├── pipeline.py             # Inference pipeline for generating insights
│   │   └── formatter.py            # Formatting output for the user
│   ├── utils/
│   │   ├── logger.py               # Logging configuration
│   │   └── config.py               # Configuration management
│   ├── workflow.py                 # Coordinates agent communication using LangGraph
│   ├── main.py                     # FastAPI application entry point
│   └── requirements.txt            # Backend dependencies
├── frontend/
│   ├── public/                     # Static frontend assets
│   ├── src/                        # React source code for the frontend
│   │   ├── App.js                  # Main UI component
│   │   ├── components/             # Reusable UI components
│   │   ├── api.js                  # API interaction logic
│   │   └── styles/                 # Frontend styles and theming
│   ├── package.json                # Frontend dependencies
│   └── README.md                   # Frontend setup instructions
├── config/
│   ├── config.yaml                 # Configuration file
├── notebooks/
│   ├── exploration.ipynb           # Jupyter notebook for exploration
├── Dockerfile                      # Docker setup for deployment
├── README.md                       # Project documentation
└── .gitignore                      # Git ignore rules
```

## Installation

### Prerequisites

- Python 3.8+
- Node.js and npm
- Docker (optional for deployment)
- Cloud services (AWS or Google Cloud for production deployment)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/DataAnalyst.git
   cd DataAnalyst/backend
   ```

2. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the FastAPI server:

   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm start
   ```

## Contributing

We welcome contributions! Please follow our [contribution guidelines](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Would you like to further customize any specific sections, or does this version fit your needs?
