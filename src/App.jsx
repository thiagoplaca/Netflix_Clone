import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import Lists from './components/Lists';
import MovieMain from './components/MovieMain';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';


const App = () => {

  const [movieList, setMovieList] = useState([])
  const [dataMain, setDataMain] = useState([])
  const [backHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter( i => i.slug === 'originals')
      let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length -1 ))
      let movieChosen = originals[0].items.results[randomMovie]
      let chosenInfo = await Tmdb.getMovieInfo(movieChosen.id, 'tv')
      setDataMain(chosenInfo)
      
    }

    loadAll()

  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)

    }
  },[])

  return (
    <div>
      <Header black={backHeader}/>
     { dataMain && <MovieMain dataMain={dataMain} />}
      <Lists movieList={movieList} />
      <Footer />
      {movieList.length <= 0 && <Loading />}
    </div>

  );
}

export default App;
