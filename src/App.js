import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [anime, setAnime] = useState(0);
  useEffect (() =>{
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setAnime(response)
  })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      {
        (anime!==0) ?
        anime.data.map(anime => {
          return (
            <div>
              <h1>{anime.anime_name}</h1>
              <img src = {anime.anime_img} alt='Anime Pic'/>
              <hr/>
            </div>
          )
        }) : null
      }
      </header>
    </div>
  );
}

export default App;
