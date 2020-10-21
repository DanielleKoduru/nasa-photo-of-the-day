import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

const apiKey = 'UdNwRPuVNwgISuVtAaWXTvvwCwtyr4atKrlteVUY'

function App() {

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-10-20`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  })


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
