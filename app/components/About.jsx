var React = require('react');

var About = (props) => {
  return (
    <div className="callout secondary">
      <span className="secondary badge">1</span>
      &nbsp;
      <span className="success badge">2</span>
      &nbsp;
      <span className="warning badge">3</span>
      <hr/>
      <h1 className='text-center page-title'>About</h1>
      <p>
        This is a simple weather application which uses React.js framework.
      </p>
      <p>
        Here are some tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React.js</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openewathermap.org">Open Weather Map</a> - Used to search weather data by city name.
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
