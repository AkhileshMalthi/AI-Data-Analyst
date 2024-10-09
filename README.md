# DataAnalyst: AI-Powered Data Analysis with LangChain, CrewAI, LangGraph, and TaskWeaver

## Overview

**DataAnalyst** is an advanced AI-driven application that automates data ingestion, analysis, and visualization using **LangChain**, **CrewAI**, **LangGraph**, and **TaskWeaver**. The application is built with a modular agentic architecture, where specialized agents handle different parts of the data analysis pipeline. Using cutting-edge AI techniques, **DataAnalyst** transforms raw data into meaningful insights, making data analysis intuitive, scalable, and accessible.

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
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automated Data Processing**: Handles data cleaning, preprocessing, and feature engineering automatically.
- **Insight Generation**: Delivers insights from the data using natural language queries and advanced language models.
- **Interactive Visualizations**: Generates both interactive and static data visualizations to aid in data understanding.
- **Agentic Workflow**: Uses an agentic architecture for modular, scalable, and robust data analysis operations.
- **Code Interpretation**: Utilizes TaskWeaver for dynamic code generation and execution.
- **Seamless User Experience**: Web-based interface for data uploads and analysis interactions.
- **Continuous Feedback and Improvement**: Collects user feedback to iteratively enhance the accuracy and relevance of analysis.

## Tech Stack

- **Backend**: 
  - FastAPI for API development
  - LangChain for language model integrations
  - Llama Index for efficient data indexing
  - LangGraph for managing workflow sequences
  - CrewAI for agent collaboration and task management
  - TaskWeaver for code interpretation and execution
- **Frontend**: 
  - Next.js for building the user interface
  - React for component-based UI development
- **Machine Learning**: Integration with GPT-3, GPT-4, or other large language models
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Deployment**: Docker, AWS Free Tier, Google Cloud Free Tier
- **Version Control**: Git, GitHub

## Agentic Architecture

The architecture is composed of multiple specialized agents, each managing a distinct task in the data analysis pipeline:

- **Query Understanding Agent**: Interprets user queries and extracts intent using natural language understanding.
- **Task Planning Agent**: Breaks down user intent into executable tasks and coordinates the execution order.
- **Data Loader Agent**: Handles data ingestion, validation, and preprocessing of raw datasets.
- **Code Generation Agent**: Dynamically creates Python code based on data characteristics and user requests.
- **Execution Agent**: Executes the generated code in a secure environment and manages computational resources.
- **Analyst Agent**: Performs statistical analysis and interprets data output.
- **Visualizer Agent**: Generates interactive visualizations to present the insights.
- **Report Writer Agent**: Synthesizes analysis results into user-friendly reports.
- **Feedback Improvement Agent**: Collects feedback from the user and iteratively improves the system.
- **Error Handling Agent**: Manages exceptions, ensuring smooth error recovery and user experience.

**LangGraph** manages the sequential and conditional flow of tasks, while **CrewAI** handles agent collaboration, performance tracking, and coordination. **TaskWeaver** is used for dynamic code generation and execution.

## Project Structure

```plaintext
DataAnalyst/
├── backend/
│   ├── config/
│   │   ├── __init__.py
│   │   └── settings.py
│   ├── src/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── langchain_components/
│   │   │   ├── __init__.py
│   │   │   ├── input_processor.py
│   │   │   ├── response_formatter.py
│   │   │   └── memory_manager.py
│   │   ├── langgraph_components/
│   │   │   ├── __init__.py
│   │   │   └── workflow_manager.py
│   │   ├── crewai_components/
│   │   │   ├── __init__.py
│   │   │   ├── agent_factory.py
│   │   │   ├── data_loader_agent.py
│   │   │   ├── analyst_agent.py
│   │   │   ├── visualizer_agent.py
│   │   │   └── report_writer_agent.py
│   │   ├── taskweaver_components/
│   │   │   ├── __init__.py
│   │   │   ├── code_interpreter.py
│   │   │   └── result_interpreter.py
│   │   ├── artifact_management/
│   │   │   ├── __init__.py
│   │   │   └── artifact_manager.py
│   │   └── utils/
│   │       ├── __init__.py
│   │       ├── data_utils.py
│   │       └── visualization_utils.py
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_langchain_components.py
│   │   ├── test_langgraph_components.py
│   │   ├── test_crewai_components.py
│   │   ├── test_taskweaver_components.py
│   │   └── test_artifact_management.py
│   ├── data/
│   │   └── sample_datasets/
│   │       └── sales_data.csv
│   ├── notebooks/
│   │   └── data_exploration.ipynb
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│   ├── package.json
│   └── next.config.js
├── docs/
│   ├── architecture.md
│   ├── api_reference.md
│   └── user_guide.md
├── Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore
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

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Set up configuration:
   - Copy `config/settings.example.py` to `config/settings.py`
   - Update `settings.py` with your specific configurations (API keys, etc.)

5. Start the backend server:
   ```bash
   uvicorn src.main:app --reload
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Usage

1. Ensure both backend and frontend servers are running.
2. Access the web interface at `http://localhost:3000`
3. Use the provided UI to upload data, run analyses, and visualize results.
4. For API documentation, visit `http://localhost:8000/docs`

For detailed usage instructions, refer to the [User Guide](docs/user_guide.md).

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

For any questions or support, please open an issue in the GitHub repository or contact the maintainers directly.
