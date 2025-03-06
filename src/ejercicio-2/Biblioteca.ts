import { BibliotecaCalculadora } from "./BibliotecaCalculadora";
import { BibliotecaSearch } from "./BibliotecaSearch";
import { BibliotecaInfo } from "./BibliotecaInfo";
import { Artista } from "./Artista";

interface IBiblioteca {
  info(): void;
  search(parametro: string): void;
  numeroDeCanciones(nombreDisco: string): number;
  tiempoDeDisco(nombreDisco: string): number;
  vistasDeDisco(nombreDisco: string): number;
}

export class Biblioteca implements IBiblioteca {
  private _artistas: Artista[];
  private _info: BibliotecaInfo;
  private _search: BibliotecaSearch;
  private _calculadora: BibliotecaCalculadora;

  /**
   * Constructor de la clase Biblioteca
   * @param artistas - Lista de artistas
   */
  constructor(...artistas: Artista[]) {
    this._artistas = artistas;
    this._info = new BibliotecaInfo(this._artistas);
    this._search = new BibliotecaSearch(this._artistas);
    this._calculadora = new BibliotecaCalculadora(this._artistas);
  }

  /**
   * Muestra la información de la biblioteca en forma de tabla
   */
  info(): void {
    this._info.info();
  }

  /**
   * Realiza una búsqueda en la biblioteca
   * @param query - Término de búsqueda
   */
  search(query: string): void {
    this._search.search(query);
  }

  /**
   * Obtiene el número de canciones de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Número de canciones
   */
  numeroDeCanciones(nombreDisco: string): number {
    return this._calculadora.numeroDeCanciones(nombreDisco);
  }

  /**
   * Obtiene la duración total de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Duración en segundos
   */
  tiempoDeDisco(nombreDisco: string): number {
    return this._calculadora.tiempoDeDisco(nombreDisco);
  }

  /**
   * Obtiene el número de reproducciones de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Número de reproducciones
   */
  vistasDeDisco(nombreDisco: string): number {
    return this._calculadora.vistasDeDisco(nombreDisco);
  }
}