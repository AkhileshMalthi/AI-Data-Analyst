# main.py – Entry point for FastAPI backend.
from fastapi import FastAPI
from app.routes import analysis

app = FastAPI()

app.include_router(analysis.router)
