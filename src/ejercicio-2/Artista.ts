import { Cancion } from "./Cancion";
import { ColeccionMusical } from "./ColeccionMusical";

export class Artista<T extends ColeccionMusical> {
  private _nombre: string;
  private _oyentes: number;
  private _discografia: T[];

  /**
   * Constructor de la clase Artista
   * @param nombre - Nombre del artista
   * @param oyentes_mensuales - Número de oyentes mensuales
   * @param discografia - Lista de discos o singles del artista
   */
  constructor(nombre: string, oyentes_mensuales: number, discografia: T[]) {
    this._nombre = nombre;
    this._oyentes = oyentes_mensuales;
    this._discografia = discografia;
  }

  /**
   * Getter del número de oyentes
   */
  get oyentes(): number {
    return this._oyentes;
  }

  /**
   * Getter del nombre del artista
   */
  get nombre(): string {
    return this._nombre;
  }

  /**
   * Getter de la discografía del artista
   */
  get discografia(): T[] {
    return this._discografia;
  }

  /**
   * Canciones que ha creado el artista
   * @returns Lista de canciones
   */
  canciones(): Cancion[] {
    let retorno_canciones: Cancion[] = [];
    this._discografia.forEach((item) => {
      item.canciones.forEach((cancion) => {
        retorno_canciones.push(cancion);
      });
    });
    return retorno_canciones;
  }
}