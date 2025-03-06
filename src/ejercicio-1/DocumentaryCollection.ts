import { BasicStreamableCollection } from "./BasicStremeableCollection";
import { Video } from "./video";

export class DocumentaryCollection extends BasicStreamableCollection<Video> {
  /**
   * Search in the array of the object the element with the same name title
   * @param name - string
   * @returns list of videos with the same name
   */
  searchByName(name: string): Video[] {
    return this.items.filter((video) => video.title.includes(name));
  }

  /**
   * Looks for videos with the same release year
   * @param year - number
   * @returns list of videos with the same release year
   */
  searchByYear(year: number): Video[] {
    return this.items.filter((video) => video.year === year);
  }
}
