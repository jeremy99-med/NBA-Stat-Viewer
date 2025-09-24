from flask import Flask, Blueprint, jsonify, request
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)

# Store your API key securely (better: environment variable)
API_KEY = os.getenv("BALLDONTLIE_API_KEY")

# Create the blueprint
nfl_bp_ps = Blueprint('nfl', __name__)  # 'nba' is just the blueprint name

# Add routes to the blueprint
@nfl_bp_ps.route('', methods=['GET'])
def get_player():
    player_search = request.args.get("search")
    if not player_search:
        return jsonify({"error": "Missing 'name' query parameter"}), 400

    try:
        url = "https://api.balldontlie.io/nfl/v1/players"

        # Add API key to the request headers
        headers = {"Authorization": API_KEY}

        response = requests.get(url, headers=headers, params={"search": player_search})
        response.raise_for_status()

        player_data = response.json()
        return jsonify(player_data)

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"API request failed: {e}"}), 500

if __name__ == "__main__":
    app.run(debug=True)

