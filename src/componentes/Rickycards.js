import React from 'react'
import{Link} from 'react-router-dom'
function Rickycards({character}) {
return (
    <div className='card'>
        <img src= {character.image} alt={character.name}/>
        <div className='card-body'>
            <Link to ={`/individual/${character.id}`}>
            <button className='btn' key={character.id}>Detalles</button>
            </Link>
        </div>
    </div>
  )
}

export default Rickycards


