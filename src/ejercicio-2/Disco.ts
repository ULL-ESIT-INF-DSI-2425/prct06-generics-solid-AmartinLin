import { Cancion } from "./Cancion";
import { ColeccionMusical } from "./ColeccionMusical";

/**
 * Clase para realizar cálculos relacionados con un disco
 */
class DiscoCalculadora {
  /**
   * Calcula la duración total del disco
   * @param canciones - Lista de canciones del disco
   * @returns - Duración total en segundos
   */
  static calcularDuracion(canciones: Cancion[]): number {
    return canciones.reduce((acc, cancion) => acc + cancion.tiempo, 0);
  }

  /**
   * Calcula el número total de reproducciones del disco
   * @param canciones - Lista de canciones del disco
   * @returns - Número total de reproducciones
   */
  static calcularReproducciones(canciones: Cancion[]): number {
    return canciones.reduce((acc, cancion) => acc + cancion.reproducciones, 0);
  }
}

export class Disco implements ColeccionMusical {
  private _nombre: string;
  private _salida: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase Disco
   * @param nombre - Nombre del disco
   * @param salida - Año de salida del disco
   * @param canciones - Lista de canciones que tiene el disco
   */
  constructor(nombre: string, salida: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._salida = salida;
    this._canciones = canciones;
  }

  /**
   * Nos dice el número de canciones que tiene el disco
   * @returns - Número de canciones
   */
  nSongs(): number {
    return this._canciones.length;
  }

  /**
   * Cuánto dura el total del disco
   * @returns - Número de segundos que dura el disco
   */
  time(): number {
    return DiscoCalculadora.calcularDuracion(this._canciones);
  }

  /**
   * Número de reproducciones que tiene el disco
   * teniendo en cuenta las vistas de cada canción
   * @returns - Número de visitas
   */
  reproducciones(): number {
    return DiscoCalculadora.calcularReproducciones(this._canciones);
  }

  /**
   * Getter para el nombre del disco
   */
  get nombre() {
    return this._nombre;
  }

  /**
   * Getter para el año de salida
   */
  get year() {
    return this._salida;
  }

  /**
   * Getter para el array de canciones del disco
   */
  get canciones() {
    return this._canciones;
  }
}