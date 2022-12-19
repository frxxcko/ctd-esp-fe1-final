import { ChangeEvent, FC } from "react";
import {
    useDispatch,
} from "react-redux"
import { searchCharactersThunks } from "../../redux/actions/personajes.actions";
import { useSelector } from "../../redux/store";

import './filtros.css';

const Filtros: FC = () => {

    const busqueda = useSelector((estado) => estado.personajes.busqueda)
    const dispatch = useDispatch();
    const buscarPersonajes = async (e: ChangeEvent<HTMLInputElement>) => {

        dispatch(searchCharactersThunks(e.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input onChange={(e) => buscarPersonajes(e)} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={busqueda} />
    </div>
}

export default Filtros;