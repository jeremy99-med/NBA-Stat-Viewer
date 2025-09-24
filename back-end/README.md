# NBA Stats Backend (Flask)

This is a Flask backend that fetches NBA data from the [balldontlie API](https://www.balldontlie.io/).

## Setup

1. Clone the repo:
   git clone https://github.com/your-username/nba-backend.git
   cd nba-backend/backend

2. Create a virtual environment and install dependencies:
   python -m venv venv
   source venv/bin/activate  # Mac/Linux
   venv\Scripts\activate     # Windows
   pip install -r requirements.txt

3. Copy the example .env and add your API key:
   cp .env.example .env
   # Then edit .env to include your actual BALLDONTLIE_API_KEY

4. Run the app:
   python playerSearch.py

5. Test in browser or Postman:
   http://127.0.0.1:5000/player?name=lebron
