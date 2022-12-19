import { useEffect } from 'react';
import {
    useDispatch,
} from "react-redux";
import { searchCharactersThunks } from '../../redux/actions/personajes.actions';
import { useSelector } from '../../redux/store';
import Personaje from '../../types/characters.types';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * @param {Object[]} listaPersonajes props
 * @returns {React.ReactElement} un JSX element 
 */

interface Props {
    listaPersonajes: Personaje[]
}
 const GrillaPersonajes = ({ listaPersonajes}: Props) => {

    const { favoritos } = useSelector((state) => state.personajes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchCharactersThunks(""));
    }, [dispatch]);

   

    if (!listaPersonajes || listaPersonajes.length === 0) return <div>No se encontraron personajes</div>

    return <div className="grilla-personajes">
        {listaPersonajes.map((personaje) => {
            return <div id={`${personaje.id}`}>
                <TarjetaPersonaje favoritos={favoritos} personaje={personaje} nombre={personaje.name} image={personaje.image} />
            </div>
        })}
    </div>
}

export default GrillaPersonajes;