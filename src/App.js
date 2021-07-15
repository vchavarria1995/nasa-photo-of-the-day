import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Placeholder from './components/placeholder';

export const BASE_URL = 'https://api.nasa.gov/planetary/apod?';
export const API_KEY = 'api_key=0AKd7aYfJUgofrr7rF5RuQLOb2ALjPEWkzYFgiKo'

function App() {
  const [imgData, setImgData] =useState([]);

  useEffect(() => {
    const getImage = () =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=0AKd7aYfJUgofrr7rF5RuQLOb2ALjPEWkzYFgiKo&date=2012-03-14')
      .then(res => {
        setImgData(res.data);
      })
      .catch((err) => console.log('Error: ' + err));
    };
    getImage();
    }, []);

  return (
    <div className="App">
      <p>
        NASA Picture of the Day! <span role="img" aria-label='go!'>🚀</span>
      </p>
      <p>{imgData.title}</p>
      <p>{imgData.date}</p>
      <p>{imgData.explanation}</p>
      <p>{imgData.hdurl}</p>
      <img src={imgData.url} alt="NASA pic of the day"/>
      <p>{imgData.copyright}</p>
    </div>
  );
}

export default App;
