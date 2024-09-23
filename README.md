# DataAnalyst: AI-Powered Data Analysis with LangChain and Llama Index

## Overview

**DataAnalyst** is an AI-driven application that automates data ingestion, analysis, and visualization using LangChain and Llama Index. The application employs an agentic architecture, with specialized agents handling different aspects of the data analysis workflow. Utilizing Retrieval-Augmented Generation (RAG) techniques, **DataAnalyst** provides deep insights and actionable results from user-provided data files, making data analysis intuitive and accessible.

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

- **Automated Data Processing**: Automatically handles data cleaning, preprocessing, and feature engineering.
- **Insight Generation**: Provides insights and summaries using advanced language models.
- **Interactive Visualizations**: Offers data visualizations to help users understand their data better.
- **User-Friendly Interface**: A web-based interface for seamless data uploads and analysis interactions.
- **Agentic Workflow**: Modular agents manage discrete tasks in the data analysis process, ensuring robust, flexible, and scalable operations.

## Tech Stack

- **Backend**: FastAPI, LangChain, Llama Index, LangGraph
- **Frontend**: React
- **Machine Learning**: Integration with GPT-3, GPT-4, or other large language models
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Deployment**: Docker, AWS Free Tier, Google Cloud Free Tier
- **Version Control**: Git, GitHub

## Agentic Architecture

DataAnalyst employs a sophisticated agentic approach where each agent is responsible for a specific aspect of the data analysis process. This design enables modular, maintainable, and scalable operations:

- **Data Ingestion Agent**: Handles data uploads, validation, and preprocessing.
- **Data Exploration Agent**: Analyzes the dataset using natural language queries, leveraging LangChain and Llama Index for contextual understanding.
- **Feature Engineering Agent**: Performs feature creation and transformation to prepare data for modeling.
- **Model Selection Agent**: Chooses the most suitable machine learning model based on data characteristics and user requirements.
- **Model Training Agent**: Trains the selected model with the preprocessed data and optimizes it for performance.
- **Model Evaluation Agent**: Evaluates the trained model, providing insights into its performance and suggesting improvements.
- **Visualization Agent**: Generates interactive and static visualizations to present the data and model results effectively.
- **Feedback Improvement Agent**: Collects user feedback and iteratively improves the analysis process and model accuracy.
- **Error Handling Agent**: Manages exceptions and errors during the analysis, ensuring a smooth user experience.

## Project Structure

```plaintext
DataAnalyst/
├── agents/                         # Specialized agents for discrete tasks
│   ├── data_ingestion_agent.py     # Handles data uploads, validation, and preprocessing
│   ├── data_exploration_agent.py   # Conducts data analysis using LangChain and Llama Index
│   ├── feature_engineering_agent.py# Manages feature creation and transformation
│   ├── model_selection_agent.py    # Chooses the optimal machine learning model
│   ├── model_training_agent.py     # Trains the selected machine learning model
│   ├── model_evaluation_agent.py   # Evaluates model performance and interprets results
│   ├── visualization_agent.py      # Creates data visualizations
│   ├── feedback_improvement_agent.py# Collects feedback and enhances the system
│   └── error_handling_agent.py     # Manages exceptions and errors during analysis
├── backend/
│   ├── data/
│   │   ├── loader.py               # For data loading and preprocessing
│   │   ├── cleaner.py              # For data cleaning
│   │   └── transformer.py          # For data transformation and feature engineering
│   ├── models/
│   │   ├── llm_model.py            # LLM interaction and utility functions
│   │   └── multi_model.py          # Handling multiple models if needed
│   ├── inference/
│   │   ├── pipeline.py             # Inference pipeline for generating insights
│   │   └── formatter.py            # Formatting results for output
│   ├── utils/
│   │   ├── logger.py               # Logging configuration
│   │   └── config.py               # Configuration loader
│   ├── workflow.py                 # Coordinates communication between agents
│   ├── main.py                     # FastAPI application entry point
│   └── requirements.txt            # Backend dependencies
├── frontend/
│   ├── public/                     # Static files for the frontend
│   ├── src/                        # Source code for the frontend
│   │   ├── App.js                  # Main UI component
│   │   ├── components/             # Reusable UI components
│   │   ├── api.js                  # API interaction scripts
│   │   └── styles/                 # Styling for the UI
│   ├── package.json                # Frontend dependencies and scripts
│   └── README.md                   # Frontend setup guide
├── config/
│   ├── config.yaml                 # Configuration file for settings
├── notebooks/
│   ├── exploration.ipynb           # Jupyter notebooks for data exploration
├── Dockerfile                      # Dockerfile for deployment
├── README.md                       # Project documentation
└── .gitignore                      # Git ignore file
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

We welcome contributions from the community! Please see our [contribution guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
