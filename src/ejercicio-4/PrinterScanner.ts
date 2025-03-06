import { Printable } from "./Printer";
import { Scannable } from "./Scanner";

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}