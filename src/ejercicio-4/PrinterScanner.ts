import { Printable } from "./Printer";
import { Scannable } from "./Scanner";

export class PrinterScanner implements Printable, Scannable {
  /**
   * Prints in console 
   */
  print(): void {
    console.log('Printing...');
  }

  /**
   * Prints in console like it's scanning
   */
  scan(): void {
    console.log('Scanning...');
  }
}