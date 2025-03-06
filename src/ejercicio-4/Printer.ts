export interface Printable {
  print(): void;
}

export class Printer implements Printable {
  /**
   * Prints in console
   */
  print(): void {
    console.log('Printing...');
  }
}