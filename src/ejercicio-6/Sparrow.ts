import { Bird } from "./Bird";

interface Flyable {
  fly(): void;
}

export class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}