import './App.css';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
import Movielist from './Components/Movielist.js'
import Search from './Components/Search'
import {useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import Description from './Components/Description';


function App() {
  const[movies,setMovies] = useState([
    {
      id :uuidv4(),
      name:"The shawshank redemption",
      Description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.",
      image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/aa17005fd6e7eb3e15e32b9f9252e0aea07b50c7bd0bfe686ac45498fc6f809b._RI_V_TTW_.jpg",
      rating :5,
      year:"1994",
      trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc"
    },
    {
      id :uuidv4(),
      name:"the Matrix",
      Description:"The film describes a future in which reality perceived by humans is actually the Matrix, a simulated reality created by sentient Machines in order to pacify and subdue the human population while their bodies' heat and electrical activity are used as an energy source.",
      image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      rating :4,
      year:"1999",
      trailer:"https://www.youtube.com/watch?v=9ix7TUGVYIo"
    },
    {
      id :uuidv4(),
      name:"The last castle",
      Description:"The Last Castle is a 2001 American action drama film directed by Rod Lurie, starring Robert Redford, James Gandolfini, Mark Ruffalo and Delroy Lindo. The film portrays a struggle between inmates and the warden of a military prison, based on the United States Disciplinary Barracks at Fort Leavenworth.",
      image:"https://m.media-amazon.com/images/I/91RQ3UOiIZL._SL1500_.jpg",
      rating :4,
      year:"2001",
      trailer:"https://www.youtube.com/watch?v=F_fHxifm35U"
    },
    {
      id :uuidv4(),
      name:"EQUILIBRIUM",
      Description:"In a futuristic world, a regime has eliminated war by suppressing emotions: books, art and music are strictly forbidden and feeling is a crime punishable by death. ",
      image:"https://m.media-amazon.com/images/I/51K2WVH130L.jpg",
      rating :4,
      year:"2002",
      trailer:"https://www.youtube.com/watch?v=raleKODYeg0"
    },
    {
      id :uuidv4(),
      name:"The usual suspects",
      Description:"Following a truck hijack in New York, five criminals are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser Söze is felt.",
      image:"https://m.media-amazon.com/images/I/91uAlM3mOAL._SL1500_.jpg",
      rating :4,
      year:"1995",
      trailer:"https://www.youtube.com/watch?v=oiXdPolca5w"
    },
    {
      id :uuidv4(),
      name:"Fight Club",
      Description:"suffering from insomnia meets a strange soap salesman named Tyler Durden and soon finds himself living in his  squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives",
      image:"https://m.media-amazon.com/images/I/51iOANjtCQL.jpg",
      rating :4,
      year:"1999",
      trailer:"https://www.youtube.com/watch?v=qtRKdVHc-cE"
    },
    ]);
    const [movie, setMovie] = useState({
      name: "",
      Description:"",
      image: "",
      rating: "",
      year: "",
      trailer:""
    });
  const[searchTerm,setsearchTerm]=useState('')
  const [rate, setRate] = useState(1)
  
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
    
      const handlonchange = (e)=>{
        setsearchTerm(e.target.value);
      }
 
  return (
   
    <div className="App">
    <h1 className='head'> Movie app</h1>
    <Search setRate={setRate} />
    <input className='search' type='text' placeholder="search..." onChange={handlonchange}/> 
    
    <Movielist movies={movies.filter(el=>el.name.toLowerCase().includes(searchTerm.toLowerCase())&& el.rating >= rate)}/>
    <Routes>
        <Route exact path='/Description/:description' element={<Description movies={movies}/>}>
         </Route>
        <Route path='/' element={<Movielist handleChange={handleChange} handleSubmit={handleSubmit} movies={movies}/>}></Route>
      </Routes>
    <div className="addMovies">
    <input type="text" placeholder="name" name="name"  onChange={ handleChange}></input>
    <input type="text" placeholder="image" name="image" onChange={ handleChange} ></input>
    <input type="text" placeholder="rating" name="rating" onChange={ handleChange}></input>
    <input type="text" placeholder="year" name="year" onChange={ handleChange}></input>
    <button type="submit" onClick={handleSubmit}>Add</button>
   </div> 
   
    
  </div>
);
}
      
  
  
  

export default App;
