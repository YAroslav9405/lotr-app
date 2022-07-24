import React,{useState} from 'react';
import './App.scss';
import './scss/main.scss'
import { Routes,Route } from 'react-router';
import Home from './pages/home/Home';




function App() {
  const [loading,setLoading] = useState(true);
  const spinner = document.getElementById('spinner');
  if(spinner) {
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false);
    }, 2000);
  }
  return (
      !loading && (
        <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            
        </Routes>
      </div>
      )
  );
}

export default App;
