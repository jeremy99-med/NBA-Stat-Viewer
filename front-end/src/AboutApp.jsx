function AboutApp() {

  return (
    <div className='about-app'>
        <div className='about-app-title'>
            <h2 className="text-xl mb-4">About:</h2>
        </div>
        <div className="about-app-description">
            <span>
                <p>This project is a full-stack web application that provides up-to-date basketball information by using BallDontlie's API URLs which retrieve key information about a player, a team or a particular game. <br /></p>
                <p><br/><u>Backend (Python/Flask):</u> I created custom RESTful APIs using Flask and Blueprints to handle requests for player searches, stats, and games. The API sent a GET request to BallDontLie's endpoint which triggers a response containing key data in JSON format. I used CORS middleware to enable cross-origin requests from the React frontend and designed structured error handling for missing parameters and failed API requests. <br/></p>
                <p><br /><u>Frontend (React):</u> I created a front-end web application using React as well as a responsive React component to call the custom Flask Python APIs using fetch. The searches display results such as <b>player details, season statistics, and game data for specific dates.</b> <br /></p>
            </span>
            <h4>
                This app is created my Jeremy Mednik.
            </h4>
        </div>
    </div>
  );
}

export default AboutApp;