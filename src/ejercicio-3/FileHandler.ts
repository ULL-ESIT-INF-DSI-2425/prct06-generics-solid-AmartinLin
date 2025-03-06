import * as fs from "fs";

export interface IFileHandler {
  read(): string;
  write(data: string): void;
}

export class FileHandler implements IFileHandler {
  constructor(private filePath: string) {}

  /**
   * Reads the content of a file
   * @returns - string - content inside the file 
   */
  read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al leer el archivo: ${error.message}`);
      } else {
        throw new Error(`Error al leer el archivo: Error desconocido`);
      }
    }
  }

  /**
   * Edit the content of a file
   * @param data - String - data that needs to be in the file
   */
  write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error al escribir en el archivo: ${error.message}`);
      } else {
        throw new Error(`Error al escribir en el archivo: Error desconocido`);
      }
    }
  }
}