import { IFileHandler } from "./FileHandler";

export class FileManager {
  constructor(private handler: IFileHandler) {}

  /**
   * Reads the content of a file
   * @returns - String
   */
  readFile(): string {
    return this.handler.read();
  }

  /**
   * Edit the content of a file
   * @param data - string
   */
  writeFile(data: string): void {
    this.handler.write(data);
  }
}