import { describe, test, expect } from 'vitest';
import { Operations } from '../src/modi/Operations'

const lista1 = [1, 2, 3, 4, 5];
const lista2 = ["hola", "chao", "Felipe", "Alberto"];
const lista3 =[5, 5, 5];

describe('Append', () => {
  test('funcionamiento normal', () => {
    const a = new Operations();
    expect(a.append(lista1, lista3)).toStrictEqual([1, 2, 3, 4, 5, 5, 5, 5]);
  });
  test('funcionamiento varios tipos', () => {
    const a = new Operations();
    expect(a.append(lista1, lista2)).toStrictEqual([1, 2, 3, 4, 5, "hola", "chao", "Felipe", "Alberto"]);
  });
});

describe('Concatenate', () => {
  test('Funcionamiento normal', () => {
    const a = new Operations();
    expect(a.concatenate(lista1, lista3, [6, 7, 8])).toStrictEqual([1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8]);
  });
  test('funcionamiento varios tipos', () => {
    const a = new Operations();
    expect(a.append(["hola"], [1,2,3])).toStrictEqual(["hola",1,2,3]);
  });
});

describe('filter', () => {
  test('funcionamiento normal', () => {
    const a = new Operations();
    expect(a.filter((element) => element > 4, lista1)).toStrictEqual([5]);
  });
  test('Funcionamiento varios tipos', () => {
    const a = new Operations();
    expect(a.filter((element) => element === "Pedro", [1, 2, "Pedro"])).toStrictEqual(["Pedro"]);
    expect(a.filter((element) => element > 4, [1, 2, "Pedro"])).toStrictEqual([]);
  })
});

describe('length', () => {
  test('Funcionamiento normal', () => {
    const a = new Operations();
    expect(a.length(lista3)).toBe(3);
  });
  test('Funcionamiento varios tipos', () => {
    const a = new Operations();
    expect(a.length([2,3,"caramel",65])).toBe(4);
  });
});

describe('map', () => {
  test('funcionamiento normal', () => {
    const a = new Operations();
    expect(a.map((element) => element * 4, [4, 5, 6])).toStrictEqual([16, 20, 24]);
    expect(a.map((element) => element + "a", ["albahaca", "merchor"])).toStrictEqual(["albahacaa", "merchora"]);
  });
});

describe('reduce', () => {
  test('Funcionamiento normal', () => {
    
  });
});

describe('reverse', () => {
  test('', () => {
    
  });
});

describe('forEach', () => {
  test('', () => {
    
  });
});



// test('funcionamiento varios tipos', () => {
  //   const a = new Operations();
  //   expect(a.map((element) => element * 4, [4, 5, 6, "trabalaca"])).toStrictEqual([16, 20, 24, NaN]);
  //   expect(a.map((element) => element + "a", ["albahaca", "merchor", 43])).toStrictEqual(["albahacaa", "merchora"]);
  // });