//import { Append } from "./Append";

export class Operations<T, U> {

  /**
   * Añade los elementos de la segunda lista al final de la primera
   * @param lista1 - T[]
   * @param lista2 - U[]
   * @returns lista nueva
   */
  append(lista1: T[], lista2: U[]) : (T | U)[] {
    let nueva_lista: (T | U)[] = lista1;
    for (let elementB of lista2) {
      nueva_lista = [...nueva_lista, elementB];
    }
    return nueva_lista;
  };

  /**
   * Concatena una serie de listas una detras de otra en una sola
   * @param listas - (T | U)[] Conjunto de listas 
   * @returns lista conjunto
   */
  concatenate(...listas: (T | U)[][]): (T | U)[] {
    let retorno: (T | U)[] = [];
    for (let lista of listas) {
      for (let elementB of lista) {
        retorno = [...retorno, elementB];
      }
    }
    return retorno;
  }

  /**
   * Filtra los elementos de una lista según un criterio
   * @param operation - operación que filtrará los elementos de la lista
   * @param lista 
   * @returns 
   */
  filter<T>(operation: (item: T) => boolean, lista: T[]): T[] {
    let retorno: T[] = [];
    for (let element of lista) {
      if (operation(element)) retorno = [...retorno, element];
    }
    return retorno;
  }

  length<T>(lista: T[]): number {
    let contador: number = 0;
    for (let _ in lista) {
      contador++;
    }
    return contador;
  }

  map<T>(operation: (item: T) => T, iterable: (T)[]): T[] {
    let result: T[] = [];
    for (let item of iterable) {
      result = [...result, operation(item)];
    }
    return result;
  }
}

const a = new Operations();
const hola = a.concatenate([1,2,3], ["hola"], [6, 7, 8]);
console.log(hola)