import { useEffect, useState } from 'react';
import Personaje from '../../types/characters.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


interface ITarjeta {
    image: string,
    nombre: string,
    personaje: Personaje,
    favoritos: Personaje[],
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @param {string} image
 * @param {string} nombre
 * @param {Personaje} personaje 
 * @param {Object[]} favoritos
 * @returns {React.ReactELement} un JSX element 
 */
const TarjetaPersonaje = ({ favoritos, image, nombre, personaje }: ITarjeta) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        if (favoritos.includes(personaje)) {
            setIsFavorite(true);
        }
    }, [favoritos, personaje])

    let esFav = false;
    if (favoritos.includes(personaje)) {
        esFav = true
    } else {
        esFav = false
    }

    return <div className="tarjeta-personaje">
        <img src={image} alt={nombre} />
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFav={esFav} personaje={personaje} esFavorito={isFavorite} onClick={setIsFavorite} />
        </div>
    </div>

}

export default TarjetaPersonaje;