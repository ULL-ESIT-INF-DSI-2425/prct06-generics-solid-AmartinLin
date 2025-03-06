import { describe, test, expect } from "vitest";
import { SeriesCollection } from "../src/ejercicio-1/SeriesCollection"
import { MovieCollection } from "../src/ejercicio-1/MovieCollection"
import { DocumentaryCollection } from "../src/ejercicio-1/DocumentaryCollection"

const sampleVideos = [
  { title: "Breaking Bad", year: 2008 },
  { title: "Game of Thrones", year: 2011 },
  { title: "Planet Earth", year: 2006 }
];

describe("SeriesCollection", () => {
  test("should add a new series", () => {
    const series = new SeriesCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    series.add({ title: "Stranger Things", year: 2016 });
    expect(series.getAll()).toHaveLength(4);
  });

  test("should remove a series", () => {
    const series1 = new SeriesCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    console.log(sampleVideos);
    series1.remove(sampleVideos[0]);
    expect(series1.getAll().length).toBe(2);
  });

  test("should search by name", () => {
    const series = new SeriesCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(series.searchByName("Breaking")).toEqual([sampleVideos[0]]);
  });

  test("should search by year", () => {
    const series = new SeriesCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(series.searchByYear(2011)).toEqual([sampleVideos[1]]);
  });
});

describe("MovieCollection", () => {
  test("should add a new movie", () => {
    const movies = new MovieCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    movies.add({ title: "Inception", year: 2010 });
    expect(movies.getAll()).toHaveLength(4);
  });

  test("should remove a movie", () => {
    const movies = new MovieCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    movies.remove(sampleVideos[1]);
    expect(movies.getAll()).toHaveLength(2);
  });

  test("should search by name", () => {
    const movies = new MovieCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(movies.searchByName("Thrones")).toEqual([sampleVideos[1]]);
  });

  test("should search by year", () => {
    const movies = new MovieCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(movies.searchByYear(2006)).toEqual([sampleVideos[2]]);
  });
});

describe("DocumentaryCollection", () => {
  test("should add a new documentary", () => {
    const documentaries = new DocumentaryCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    documentaries.add({ title: "Cosmos", year: 2014 });
    expect(documentaries.getAll()).toHaveLength(4);
  });

    test("should remove a documentary", () => {
    const documentaries = new DocumentaryCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    documentaries.remove(sampleVideos[2]);
    expect(documentaries.getAll()).toHaveLength(2);
  });

  test("should search by name", () => {
    const documentaries = new DocumentaryCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(documentaries.searchByName("Earth")).toEqual([sampleVideos[2]]);
  });

  test("should search by year", () => {
    const documentaries = new DocumentaryCollection([
      { title: "Breaking Bad", year: 2008 },
      { title: "Game of Thrones", year: 2011 },
      { title: "Planet Earth", year: 2006 }
    ]);
    expect(documentaries.searchByYear(2008)).toEqual([sampleVideos[0]]);
  });
});
