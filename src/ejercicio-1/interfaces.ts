export interface Streamable<T> {
  add(item: T): void;
  remove(item: T): void;
  getAll(): T[];
}

export interface SearchableByName<T> {
  searchByName(name: string): T[];
}

export interface SearchableByYear<T> {
  searchByYear(year: number): T[];
}
