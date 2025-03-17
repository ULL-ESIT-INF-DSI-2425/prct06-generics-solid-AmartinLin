// //import { Append } from "./Append";

// export class Operations<T> {
//   constructor(private lista: T[]) {}

//   /**
//    * Añade los elementos de la segunda lista al final de la primera
//    * @param lista2 - T[]
//    * @returns lista nueva
//    */
//   append(lista2: T[]): T[] {
//     let nueva_lista: T[] = this.lista;
//     for (let elementB of lista2) {
//       nueva_lista = [...nueva_lista, elementB];
//     }
//     return nueva_lista;
//   }

//   /**
//    * Concatena una serie de listas una detras de otra en una sola
//    * @param listas - T[] Conjunto de listas
//    * @returns lista conjunto
//    */
//   concatenate(...listas: T[][]): T[] {
//     let retorno: T[] = this.lista;
//     for (let lista of listas) {
//       for (let elementB of lista) {
//         retorno = [...retorno, elementB];
//       }
//     }
//     return retorno;
//   }

//   /**
//    * Filtra los elementos de una lista según un criterio
//    * @param operation - operación que filtrará los elementos de la lista
//    * @returns
//    */
//   filter<T>(operation: (item: T) => boolean): T[] {
//     let retorno: T[] = [];
//     for (let element of this.lista) {
//       if (operation(element)) retorno = [...retorno, element];
//     }
//     return retorno;
//   }

//   /**
//    * Devuelve la langitud del array del objeto
//    * @returns number
//    */
//   length(): number {
//     let contador: number = 0;
//     for (let _ in this.lista) {
//       contador++;
//     }
//     return contador;
//   }

//   /**
//    * Devuelve un array con la operación indicada para cada elemento del array
//    * @param operation - expresión que se ejecutará en cada elemento
//    * @returns array T[]
//    */
//   map<T>(operation: (item: T) => T): T[] {
//     let result: T[] = [];
//     for (let item of this.lista) {
//       result = [...result, operation(item)];
//     }
//     return result;
//   }

//   /**
//  * Hace la operacion reduce, Toma la operación y la aplica a todos
//  * los elementos del array, a partir del elemento que se le indique
//  * @param operation - operación que se le aplicará a los elementos
//  * @param acc_init - valor del que se empieza a operar (a partir de que se va a ir sumando)
//  * @returns valor final de haber hecho las operaciones al acumulador inicial.
//  */
//   reduce<T>(operation: (acc: T, item: T) => T, acc_init: T): T {
//     let retorno: T = acc_init;
//     for (let i = 0; i < this.length(); i++) {
//       retorno = operation(retorno, this.lista[i]);
//     }
//     return retorno;
//   }
// }
