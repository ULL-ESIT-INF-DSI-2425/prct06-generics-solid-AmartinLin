import * as fs from "fs";

export interface IFileHandler {
  read(): string;
  write(data: string): void;
}

export class FileHandler implements IFileHandler {
  constructor(private filePath: string) {}

  read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      throw new Error(`Error al leer el archivo: ${error.message}`);
    }
  }

  write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      throw new Error(`Error al escribir en el archivo: ${error.message}`);
    }
  }
}