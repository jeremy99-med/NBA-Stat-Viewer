from flask import Flask
# Import blueprints from each sport API
from nba_APIs.playerSearchNBA import nba_bp_ps
from nfl_APIs.playerSearchNFL import nfl_bp_ps
from nhl_APIs.playerSearchNHL import nhl_bp_ps
from mlb_APIs.playerSearchMLB import mlb_bp_ps

app = Flask(__name__)

# Register each blueprint under its sport route
app.register_blueprint(nba_bp_ps, url_prefix='/nbaplayer')
app.register_blueprint(nfl_bp_ps, url_prefix='/nflplayer')
app.register_blueprint(nhl_bp_ps, url_prefix='/nhlplayer')
app.register_blueprint(mlb_bp_ps, url_prefix='/mlbplayer')

if __name__ == "__main__":
    app.run(debug=True)
