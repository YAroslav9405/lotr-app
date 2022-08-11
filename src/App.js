import React,{useState} from 'react';
import './App.scss';
import './scss/main.scss'
import { Routes,Route } from 'react-router';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import Characters from './pages/characters/Characters';
import News from './pages/news/News';
import Map from './pages/map/Map';
import Fellowship from './pages/fellowship/Fellowship'
import TwoTowers from './pages/two-towers/TwoTowers';
import ReturnKing from './pages/return-king/ReturnKing';
import Hero from './pages/singlePage/Hero';




function App() {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/characters" element={<Characters/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/fellowship" element={<Fellowship/>} />
            <Route path="/two-towers" element={<TwoTowers/>} />
            <Route path="/return-king" element={<ReturnKing/>} />
            <Route path='/:id'  element={<Hero/>} />
        </Routes>
  );
}

export default App;
