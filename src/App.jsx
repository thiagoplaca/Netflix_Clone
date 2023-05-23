import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Lists from './components/Lists';
import MovieMain from './components/MovieMain';

function App() {

  const [movieList, setMovieList] = useState([])
  const [dataMain, setDataMain] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter( i => i.slug === 'originals')
      let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length -1 ))
      let movieChosen = originals[0].items.results[randomMovie]
      let chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, 'tv')
      setDataMain(chosenInfo)
      
      console.log(chosenInfo);
    }

    loadAll()

  }, [])

  return (
    <div>
     { dataMain && <MovieMain dataMain={dataMain} />}
      <Lists movieList={movieList} />
    </div>

  );
}

export default App;
