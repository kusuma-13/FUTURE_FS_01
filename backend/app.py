from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
# Enable CORS to allow the frontend (running on a different port/origin) to fetch data.
CORS(app) 

# --- Project Data Source (Now only includes your main project) ---
PROJECTS_DATA = [
    {
        "id": 1,
        "title": "Transaction Fraud Pattern Analyzer",
        "description": "A comprehensive data analysis project utilizing Python and MySQL to identify, visualize, and report fraudulent transaction patterns within large datasets.",
        "tags": ["Python", "MySQL", "Data Analysis", "Pandas", "Visualization"],
        "githubUrl": "https://github.com/kusuma-13/Beginner_Project.git",
        "demoUrl": "#",
    },
    {
        "id": 2,
        "title": "Job Portal Resume Keyword Analyzer",
        "description": "A data analytics project using Python and MYSQL to detect keywords in resumes for job portals, enhancing candidate-job matching efficiency.",
        "tags": ["Python", "MYSQL", "Streamlit"],
        "githubUrl": "https://github.com/kusuma-13/Intermediate_Project.git",
        "demoUrl": "#",
    }
]

# --- API Endpoints ---

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Returns the list of portfolio projects."""
    logging.info("Request received for /api/projects")
    return jsonify(PROJECTS_DATA)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    """Handles incoming contact form submissions (logs message)."""
    try:
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return jsonify({"message": "Missing form data."}), 400

        # Log the message received
        logging.info(f"--- NEW CONTACT MESSAGE ---")
        logging.info(f"From: {name} <{email}>")
        logging.info(f"Message: {message[:100]}...")
        logging.info(f"---------------------------")
        
        # Simulate successful submission
        return jsonify({"message": "Message received successfully. Thank you!"}), 200

    except Exception as e:
        logging.error(f"Error handling contact form: {e}")
        return jsonify({"message": "Internal server error."}), 500

if __name__ == '__main__':
    # Flask runs on port 5000 by default
    app.run(debug=True, port=5000)
eof
