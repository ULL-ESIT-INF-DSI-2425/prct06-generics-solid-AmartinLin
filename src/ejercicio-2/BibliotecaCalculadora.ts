import { Artista } from "./Artista";
import { Disco } from "./Disco";

export class BibliotecaCalculadora {
  constructor(private artistas: Artista[]) {}

  /**
   * Busca un disco por su nombre
   * @param nombreDisco - Nombre del disco
   * @returns El disco encontrado o null
   */
  private buscarDisco(nombreDisco: string): Disco | null {
    for (const artista of this.artistas) {
      const discoEncontrado = artista.discos.find(disco =>
        disco.nombre.toLowerCase() === nombreDisco.toLowerCase()
      );
      if (discoEncontrado) {
        return discoEncontrado;
      }
    }
    return null;
  }
  
  /**
   * Obtiene el número de canciones de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Número de canciones
   */
  numeroDeCanciones(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.nSongs() : 0;
  }

  /**
   * Obtiene la duración total de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Duración en segundos
   */
  tiempoDeDisco(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.time() : 0;
  }

  /**
   * Obtiene el número de reproducciones de un disco
   * @param nombreDisco - Nombre del disco
   * @returns Número de reproducciones
   */
  vistasDeDisco(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.reproducciones() : 0;
  }
}