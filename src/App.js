import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MainCard from "./Components/MainCard/MainCard"

const apiKey = 'UdNwRPuVNwgISuVtAaWXTvvwCwtyr4atKrlteVUY'

function App() {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2021-03-05`)
      .then(response => {
        console.log(response);
        setApodData({ photo: response.data.url, explanation: response.data.explanation, header: response.data.title, date: response.data.date, copyright: response.data.copyright })
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, [])


  return (
    <div className="App">
      <MainCard apodData={apodData} />
    </div>
  );
}

export default App;
