import Personaje from "../types/characters.types";
import PageInfo from "../types/pageinfo.types";

/**
 *  
 * @param {string} nombre
 * @returns {Promise<[Personaje[], PageInfo] | [any, any]>, } 
 */

export const buscarPersonajesAPI = async (nombre: string): Promise<[Personaje[], PageInfo] | [any, any]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
  if (!response.ok) {
    return [[], {
      count: 0,
      pages: 0,
      next: null,
      prev: null
    }];
  }
  const data = await response.json();
  return [data.results, data.info]

}

/**
 * Función que devuelve los personajes por página
 * @param {string} url 
 * @returns {Promise<[Personaje[], PageInfo]  | [any, any]}
 */

export const cambiarPaginaApi = async (
  url: string
): Promise<[Personaje[], PageInfo] | [any, any]> => {
  const response = await fetch(url);
  if (!response.ok) {
    return [[], {
      count: 0,
      pages: 0,
      next: null,
      prev: null
    }];
  }
  const data = await response.json();
  return [data.results, data.info]
};