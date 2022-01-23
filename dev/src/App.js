import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from "axios";
import Movie from './component/movies/Movie';

function App() {
  
  useEffect(()=>{
    movies()
  },[])
  const[movie,setmovies]=useState({})

const movies=async()=>{
  

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'sunday'},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': '0af3f1c37dmsh935f89d8ad26091p12e23cjsnea5bd23417b7'
  }
};

 await axios.request(options).then(function (response) {
	console.log(response.data);
  setmovies(response.data);
}).catch(function (error) {
	console.error(error);
});

}
  
  return (
    
    <div className="App">
      <Movie movie={movie}/>
      
    </div>
  );
}

export default App;
