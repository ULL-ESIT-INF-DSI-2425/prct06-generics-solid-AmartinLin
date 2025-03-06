import { Disco } from "./Disco";
import { Cancion } from "./Cancion";

interface IArtista {
  canciones(): Cancion[];
}

/**
 * Clase para realizar operaciones relacionadas con un artista
 */
class ArtistaCalculadora {
  /**
   * Obtiene todas las canciones de los discos del artista
   * @param discos - Lista de discos del artista
   * @returns - Lista de canciones
   */
  static obtenerCanciones(discos: Disco[]): Cancion[] {
    let retorno_canciones: Cancion[] = [];
    discos.forEach((disco) => {
      disco.canciones.forEach((cancion) => {
        retorno_canciones.push(cancion);
      });
    });
    return retorno_canciones;
  }
}

export class Artista implements IArtista {
  private _nombre: string;
  private _oyentes: number;
  private _discos: Disco[];

  /**
   * Constructor de la clase Artista
   * @param nombre - Nombre del artista
   * @param oyentes_mensuales - Número de oyentes mensuales
   * @param discos - Lista de discos del artista
   */
  constructor(nombre: string, oyentes_mensuales: number, discos: Disco[]) {
    this._discos = discos;
    this._oyentes = oyentes_mensuales;
    this._nombre = nombre;
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
   * Getter de los discos del artista
   */
  get discos(): Disco[] {
    return this._discos;
  }

  /**
   * Canciones que ha creado el artista
   * @returns Lista de canciones
   */
  canciones(): Cancion[] {
    return ArtistaCalculadora.obtenerCanciones(this._discos);
  }
}