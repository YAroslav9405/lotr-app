import React,{useState} from 'react';
import './App.scss';
import './scss/main.scss'
import { Routes,Route } from 'react-router';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Characters from './pages/characters/Characters';
import News from './pages/news/News';
import Map from './pages/map/Map';




function App() {
  const [loading,setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner) {
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false);
    }, 0);
  }
  return (
      !loading && (
        <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/characters" element={<Characters/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/map" element={<Map/>} />
        </Routes>
      </div>
      )
  );
}

export default App;
