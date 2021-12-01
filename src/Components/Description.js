import React from 'react'
import{useNavigate,useLocation}from 'react-router-dom'

const Description =({movies})=>{

    const location = useLocation()
    const navigate = useNavigate();
    const movie = movies.find(el => location.state.id === el.id)
    return (
        <div className="description">
            <h1>{movie.name}</h1>
             <h2>{movie.Description}</h2>
             <button onClick={()=> navigate(-1)}>go back</button>
             <iframe width="980" height="551" 
             src={movie.trailer}
             title="YouTube video player" 
             frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe>
        </div>
    )
}

export default Description
