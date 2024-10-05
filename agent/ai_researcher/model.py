"""
This module provides a function to get a model based on the configuration.
"""
import os
import getpass
from langchain_groq import ChatGroq


def get_model():
    """
    Get a model based on the environment variable.
    """
    
    if "GROQ_API_KEY" not in os.environ:
        os.environ["GROQ_API_KEY"] = getpass.getpass("Enter your Groq API key: ")
    model = ChatGroq(
        model="llama3-groq-8b-8192-tool-use-preview",
        temperature=0,
    )
    
    if model:
        return model
    raise ValueError("Invalid model specified")
