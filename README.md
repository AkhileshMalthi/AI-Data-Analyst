# DataAnalyst: AI-Powered Data Analysis with LangChain and Llama Index

## Overview

**DataAnalyst** is an AI-driven application that automates data ingestion, analysis, and visualization using LangChain and Llama Index. The application utilizes Retrieval-Augmented Generation (RAG) techniques to provide deep insights and actionable results from user-provided data files, making data analysis intuitive and accessible.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
  - [Uploading Data and Getting Analysis](#uploading-data-and-getting-analysis)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automated Data Processing**: Automatically handles data cleaning, preprocessing, and feature engineering.
- **Insight Generation**: Provides insights and summaries using advanced language models.
- **Interactive Visualizations**: Offers data visualizations to help users understand their data better.
- **User-Friendly Interface**: A web-based interface for seamless data uploads and analysis interactions.

## Tech Stack

- **Backend**: FastAPI, LangChain, Llama Index
- **Frontend**: React
- **Machine Learning**: Integration with GPT-3, GPT-4, or other large language models
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Deployment**: Docker, AWS Free Tier, Google Cloud Free Tier
- **Version Control**: Git, GitHub

## Installation

### Prerequisites

- Python 3.8 or higher
- Node.js (for frontend development)
- Docker (optional, for deployment)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/DataAnalyst.git
    cd DataAnalyst
    ```

2. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the required Python packages:

    ```bash
    pip install -r backend/requirements.txt
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the required Node.js packages:

    ```bash
    npm install
    ```

## Usage

### Running the Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Run the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

### Running the Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Start the React development server:

    ```bash
    npm start
    ```

### Uploading Data and Getting Analysis

1. Open your web browser and navigate to `http://localhost:3000`.
2. Upload a data file (e.g., CSV).
3. Click on the "Analyze" button to receive insights and visualizations based on the uploaded data.

## Project Structure

```plaintext
DataAnalyst/
├── backend/
│   ├── main.py                 # FastAPI application entry point
│   ├── workflow.py             # LangChain and Llama Index workflow
│   ├── data/
│   │   ├── loader.py           # For data loading and preprocessing
│   │   ├── cleaner.py          # For cleaning data
│   │   └── transformer.py      # For transforming and feature engineering
│   ├── models/
│   │   ├── llm_model.py        # LLM interaction and utility functions
│   │   └── multi_model.py      # Handling multiple models if needed
│   ├── inference/
│   │   ├── pipeline.py         # Inference pipeline for generating insights
│   │   └── formatter.py        # Formatting results for output
│   ├── utils/
│   │   ├── logger.py           # Logging configuration
│   │   └── config.py           # Configuration loader
│   └── requirements.txt        # Backend dependencies
├── frontend/
│   ├── public/                 # Static files for the frontend
│   ├── src/                    # Source code for the frontend
│   │   ├── App.js              # Main UI component
│   │   ├── components/         # Reusable UI components
│   │   ├── api.js              # API interaction scripts
│   │   └── styles/             # Styling for the UI
│   ├── package.json            # Frontend dependencies and scripts
│   └── README.md               # Frontend setup guide
├── config/
│   ├── config.yaml             # Configuration file for settings
├── notebooks/
│   ├── exploration.ipynb       # Jupyter notebooks for data exploration
├── Dockerfile                  # Dockerfile for deployment
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore file
