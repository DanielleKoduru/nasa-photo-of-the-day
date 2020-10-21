import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card/Card"

const apiKey = 'UdNwRPuVNwgISuVtAaWXTvvwCwtyr4atKrlteVUY'

function App() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-10-20`)
      .then(response => {
        console.log(response);
        setApod({ photo: response.data.url, explanation: response.data.explanation, title: response.data.title, date: response.data.date })
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, [])


  return (
    <div className="App">
      <Card apod={apod} />
    </div>
  );
}

export default App;
