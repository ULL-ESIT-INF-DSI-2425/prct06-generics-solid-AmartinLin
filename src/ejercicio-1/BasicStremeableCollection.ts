import { Streamable, SearchableByName, SearchableByYear } from "./interfaces";

export abstract class BasicStreamableCollection<T extends { title: string }>
  implements Streamable<T>, SearchableByName<T>, SearchableByYear<T>
{
  protected items: T[];
  constructor(items: T[] = []) {
    this.items = items;
  }

  /**
   * Add a video to the protected array 
   * @param item - Video or element of the same type as the class
   */
  add(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes an item with the same title (string)
   * @param item - item with a parameter string 
   */
  remove(item: T & { title: string }): void {
    this.items = this.items.filter((i) => i.title !== item.title);
  }

  /**
   * Returns all the videos allocated in the object
   * @returns - T[] (mostly interface video)
   */
  getAll(): T[] {
    return this.items;
  }

  /**
   * Abstract method - used to search a video by it's name
   * @param name - string
   */
  abstract searchByName(name: string): T[];

  /**
   * Abstract method - serach the video by it's release date
   * @param year - number
   */
  abstract searchByYear(year: number): T[];
}
