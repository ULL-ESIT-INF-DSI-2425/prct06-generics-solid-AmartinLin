import { Streamable, SearchableByName, SearchableByYear } from "./interfaces";

export abstract class BasicStreamableCollection<T extends { title: string }>
  implements Streamable<T>, SearchableByName<T>, SearchableByYear<T>
{
  protected items: T[];
  constructor(items: T[] = []) {
    this.items = items;
  }

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T & { title: string }): void {
    this.items = this.items.filter((i) => i.title !== item.title);
  }

  getAll(): T[] {
    return this.items;
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
}
