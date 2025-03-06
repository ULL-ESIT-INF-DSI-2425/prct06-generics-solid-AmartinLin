export interface Scannable {
  scan(): void;
}

export class Scanner implements Scannable {
  /**
   * Puts a message like it's scanning
   */
  scan(): void {
    console.log('Scanning...');
  }
}