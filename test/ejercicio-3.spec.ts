import { describe, test, expect } from "vitest";
import * as fs from "fs";
import { FileHandler, IFileHandler } from "../src/ejercicio-3/FileHandler";
import { FileManager } from "../src/ejercicio-3/FileManager";

const testFilePath = "test.txt";

describe("FileHandler", () => {
  test("debe leer el contenido de un archivo", () => {
    fs.writeFileSync(testFilePath, "Contenido de prueba", "utf-8");

    const fileHandler = new FileHandler(testFilePath);
    const result = fileHandler.read();

    expect(result).toBe("Contenido de prueba");
  });

  test("debe escribir datos en un archivo", () => {
    const fileHandler = new FileHandler(testFilePath);
    fileHandler.write("Nuevo contenido");

    const result = fs.readFileSync(testFilePath, "utf-8");
    expect(result).toBe("Nuevo contenido");
  });
});

describe("FileManager", () => {
  test("debe leer un archivo usando FileHandler", () => {
    fs.writeFileSync(testFilePath, "Contenido de prueba", "utf-8");

    const fileHandler: IFileHandler = new FileHandler(testFilePath);
    const fileManager = new FileManager(fileHandler);
    const result = fileManager.readFile();

    expect(result).toBe("Contenido de prueba");
  });

  test("debe escribir en un archivo usando FileHandler", () => {
    const fileHandler: IFileHandler = new FileHandler(testFilePath);
    const fileManager = new FileManager(fileHandler);
    fileManager.writeFile("Nuevo contenido");

    const result = fs.readFileSync(testFilePath, "utf-8");
    expect(result).toBe("Nuevo contenido");
  });
});
