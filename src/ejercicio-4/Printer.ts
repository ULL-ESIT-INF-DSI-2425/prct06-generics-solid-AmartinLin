export interface Printable {
  print(): void;
}

export class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}