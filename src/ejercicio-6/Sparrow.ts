import { Bird } from "./Bird";

interface Flyable {
  fly(): void;
}

export class Sparrow extends Bird implements Flyable {
  /**
   * Prints Flying...
   */
  fly(): void {
    console.log("Flying...");
  }
}