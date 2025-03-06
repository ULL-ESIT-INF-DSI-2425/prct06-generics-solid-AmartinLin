import { Artista } from "./Artista";

export class BibliotecaInfo {
  constructor(private artistas: Artista[]) {}

  /**
   * Muestra la información de la biblioteca en forma de tabla
   */
  info(): void {
    const tabla = this.artistas.flatMap(artista =>
      artista.discos.flatMap((disco) =>
        disco.canciones.map((cancion) => ({
          Artista: artista.nombre,
          Disco: disco.nombre,
          Canción: cancion.nombre,
          Duración: `${cancion.tiempo} seg`,
          Género: cancion.genero,
          Single: cancion.single ? "✅" : "❌",
          Reproducciones: cancion.reproducciones
        }))
      )
    );
    console.table(tabla);
  }
}