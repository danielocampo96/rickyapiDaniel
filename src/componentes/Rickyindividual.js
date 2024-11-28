import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cargando from './cargando.gif'; 



export default function Rickyindividual() {
    const [individual, setIndividual] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setIndividual(response);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className='individual'>
            {loading ? (
                <div className="cargando">
                    <img src={cargando} alt="Loading..." />
                </div>
            ) : (
                <>
                    <h1>
                        <img src={individual.image} alt={individual.name} onLoad={() => setLoading(false)} />
                    </h1>
                    <h1>ID: {individual.id}</h1>
                    <p>Nombre: {individual.name}</p>
                    <p>Status: {individual.status}</p>
                    <p>Especie: {individual.species}</p>
                    <p>Género: {individual.gender}</p>
                    <p>Fecha de creación: <date>{individual.created}</date></p>
                    <a href='http://localhost:3000/index'><button>Inicio</button></a>
                    {/* <link to={'/index'} */}
                </>
            )}
        </div>
    );
}

