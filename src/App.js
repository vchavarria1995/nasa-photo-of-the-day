import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Image from './components/image';

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
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
