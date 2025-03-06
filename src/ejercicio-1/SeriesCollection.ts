import { BasicStreamableCollection } from "./BasicStremeableCollection";
import { Video } from "./video";

export class SeriesCollection extends BasicStreamableCollection<Video> {
  searchByName(name: string): Video[] {
    return this.items.filter((video) => video.title.includes(name));
  }

  searchByYear(year: number): Video[] {
    return this.items.filter((video) => video.year === year);
  }
}

const sampleVideos = [
  { title: "Breaking Bad", year: 2008 },
  { title: "Game of Thrones", year: 2011 },
  { title: "Planet Earth", year: 2006 }
];
const series = new SeriesCollection(sampleVideos);
series.remove(sampleVideos[0]);
let a = series.getAll();
console.log(a.length)