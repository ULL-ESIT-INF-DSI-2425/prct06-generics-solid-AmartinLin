import { Cancion } from "./Cancion";

export interface ColeccionMusical {
  nombre: string;
  canciones: Cancion[];
  nSongs(): number;
  time(): number;
  reproducciones(): number;
}