import { Bird } from "./Bird";

interface Swimmable {
  swim(): void;
}

export class Penguin extends Bird implements Swimmable {
  /**
   * Prints Swimming...
   */
  swim(): void {
    console.log("Swimming...");
  }
}