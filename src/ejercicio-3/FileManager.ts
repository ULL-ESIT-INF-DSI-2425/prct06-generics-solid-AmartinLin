import { IFileHandler } from "./FileHandler";

export class FileManager {
  constructor(private handler: IFileHandler) {}

  readFile(): string {
    return this.handler.read();
  }

  writeFile(data: string): void {
    this.handler.write(data);
  }
}