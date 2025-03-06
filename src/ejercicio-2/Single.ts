import { Cancion } from "./Cancion";
import { ColeccionMusical } from "./ColeccionMusical";

export class Single implements ColeccionMusical{
  private _nombre: string;
  private _salida: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase Single
   * @param nombre - Nombre del single
   * @param salida - Año de salida del single
   * @param canciones - Lista de canciones del single
   */
  constructor(nombre: string, salida: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._salida = salida;
    this._canciones = canciones;
  }

  /**
   * Getter del nombre del single
   */
  get nombre(): string {
    return this._nombre;
  }

  /**
   * Getter del año de salida
   */
  get year(): number {
    return this._salida;
  }

  /**
   * Getter del array de canciones del single
   */
  get canciones(): Cancion[] {
    return this._canciones;
  }

  /**
   * Número de canciones en el single
   * @returns Número de canciones
   */
  nSongs(): number {
    return this._canciones.length;
  }

  /**
   * Duración total del single
   * @returns Duración en segundos
   */
  time(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.tiempo, 0);
  }

  /**
   * Número total de reproducciones del single
   * @returns Número de reproducciones
   */
  reproducciones(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.reproducciones, 0);
  }
}