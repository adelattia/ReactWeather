var React = require('react');

var About = () => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>
        This is a weather application built using <a href="https://facebook.github.io/react" target="_blank">React</a>, following <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">"The complete React Web App Developer Course."</a>
      <br/>
      I used <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> to search for weather data by city name.
      </p>
    </div>
  );
};

module.exports = About;
