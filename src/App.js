import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card/Card"

const apiKey = 'UdNwRPuVNwgISuVtAaWXTvvwCwtyr4atKrlteVUY'

function App() {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-10-21`)
      .then(response => {
        console.log(response);
        setApodData({ photo: response.data.url, explanation: response.data.explanation, title: response.data.title, date: response.data.date, copyright: response.data.copyright })
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, [])


  return (
    <div className="App">
      <Card apodData={apodData} />
    </div>
  );
}

export default App;
