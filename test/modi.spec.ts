// import { describe, test, expect } from 'vitest';
// import { Operations } from '../src/modi/Operations'

// const lista1 = [1, 2, 3, 4, 5];
// const lista2 = ["hola", "chao", "Felipe", "Alberto"];
// const lista3 =[5, 5, 5];

// describe('Append', () => {
//   test('funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.append(lista3)).toStrictEqual([1, 2, 3, 4, 5, 5, 5, 5]);
//   });
//   test('funcionamiento varios tipos', () => {
//     const a = new Operations(lista1);
//     expect(a.append(lista2)).toStrictEqual([1, 2, 3, 4, 5, "hola", "chao", "Felipe", "Alberto"]);
//   });
// });

// describe('Concatenate', () => {
//   test('Funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.concatenate(lista3, [6, 7, 8])).toStrictEqual([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8]);
//     expect(a.append([1,2,3])).toStrictEqual([1, 2, 3, 4, 5,1,2,3]);
//   });
// });

// describe('filter', () => {
//   test('funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.filter((element) => element > 4)).toStrictEqual([5]);
//   });
//   test('Funcionamiento varios tipos', () => {
//     const a = new Operations(lista1);
//     expect(a.filter((element) => element === "Pedro")).toStrictEqual([]);
//   })
// });

// describe('length', () => {
//   test('Funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.length()).toBe(5);
//   });
//   test('Funcionamiento varios tipos', () => {
//     const a = new Operations(lista2);
//     expect(a.length()).toBe(4);
//   });
// });

// describe('map', () => {
//   test('funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.map((element) => element * 4)).toStrictEqual([4, 8, 12, 16, 20]);
//     const b = new Operations(lista2);
//     expect(b.map((element) => element + "a")).toStrictEqual(["holaa", "chaoa", "Felipea", "Albertoa"]);
//   });
// });

// describe('reduce', () => {
//   test('Funcionamiento normal', () => {
//     const a = new Operations(lista1);
//     expect(a.reduce((acc, valor) => acc + valor, 0)).toStrictEqual(15);
//     expect(a.reduce((acc, valor) => acc + valor, 3)).toStrictEqual(18);
//   });
// });

// describe('reverse', () => {
//   test('', () => {
    
//   });
// });

// describe('forEach', () => {
//   test('', () => {
    
//   });
// });



// // test('funcionamiento varios tipos', () => {
//   //   const a = new Operations(lista1);
//   //   expect(a.map((element) => element * 4, [4, 5, 6, "trabalaca"])).toStrictEqual([16, 20, 24, NaN]);
//   //   expect(a.map((element) => element + "a", ["albahaca", "merchor", 43])).toStrictEqual(["albahacaa", "merchora"]);
//   // });