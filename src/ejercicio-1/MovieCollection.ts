import { BasicStreamableCollection } from "./BasicStremeableCollection";
import { Video } from "./video";

export class MovieCollection extends BasicStreamableCollection<Video> {
  searchByName(name: string): Video[] {
    return this.items.filter((video) => video.title.includes(name));
  }

  searchByYear(year: number): Video[] {
    return this.items.filter((video) => video.year === year);
  }
}
