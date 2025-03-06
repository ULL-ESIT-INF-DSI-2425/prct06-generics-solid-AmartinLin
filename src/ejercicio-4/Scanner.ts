export interface Scannable {
  scan(): void;
}

export class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}