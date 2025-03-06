import { Artista } from "./Artista";
import { ColeccionMusical } from "./ColeccionMusical";

export class BibliotecaSearch {
  constructor(private artistas: Artista<ColeccionMusical>[]) {}

  /**
   * Realiza una búsqueda en la biblioteca
   * @param query - Término de búsqueda
   */
  search(query: string): void {
    query = query.toLowerCase();
    const artistasEncontrados: Artista<ColeccionMusical>[] = this.artistas.filter(artista =>
      artista.nombre.toLowerCase().includes(query)
    );
    if (artistasEncontrados.length > 0) {
      const tabla = artistasEncontrados.flatMap(artista =>
        artista.discografia.flatMap(disco =>
          disco.canciones.map(cancion => ({
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
      return;
    }
    const discosEncontrados = this.artistas.flatMap(artista =>
      artista.discografia.filter(disco =>
        disco.nombre.toLowerCase().includes(query)
      ).map(disco => ({ artista, disco }))
    );
    if (discosEncontrados.length > 0) {
      const tabla = discosEncontrados.flatMap(({ artista, disco }) =>
        disco.canciones.map(cancion => ({
          Artista: artista.nombre,
          Disco: disco.nombre,
          Canción: cancion.nombre,
          Duración: `${cancion.tiempo} seg`,
          Género: cancion.genero,
          Single: cancion.single ? "✅" : "❌",
          Reproducciones: cancion.reproducciones
        }))
      );
      console.table(tabla);
      return;
    }
    const cancionesEncontradas = this.artistas.flatMap(artista =>
      artista.discografia.flatMap(disco =>
        disco.canciones
          .filter(cancion => cancion.nombre.toLowerCase().includes(query))
          .map(cancion => ({
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
    console.table(cancionesEncontradas);
  }
}