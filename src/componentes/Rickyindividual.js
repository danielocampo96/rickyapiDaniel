import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { useParams,useNavigate } from 'react-router-dom';


export default function Rickyindividual() {
    const [individual, setIndividual] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate ()
    
    

    
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((response) => {
                setIndividual(response);
                setLoading(false);
            });
            if (loading){
                Swal.fire({
                    title: 'loading',
                })
            }
            else Swal.close()
    
       
    return (
        <div className='individual'>
            {/* {loading ? (
                <div className="cargando">
                    <img src={cargando} alt="Loading..." />
                </div>
            ) : (
                <> */}
                    <h1>
                        <img src={individual.image} alt={individual.name} onLoad={() => setLoading(false)} />
                    </h1>
                    <h1>ID: {individual.id}</h1>
                    <p>Nombre: {individual.name}</p>
                    <p>Status: {individual.status}</p>
                    <p>Especie: {individual.species}</p>
                    <p>Género: {individual.gender}</p>
                    <p>Fecha de creación: <date>{individual.created}</date></p>

                   
                    <button onClick={() => navigate('/index')}>Inicio</button>
                
            
        </div>
    );
}

