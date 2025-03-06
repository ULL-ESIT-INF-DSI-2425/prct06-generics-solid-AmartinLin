import { describe, test, expect, vi } from "vitest";
import { Printer } from "../src/ejercicio-4/Printer";
import { Scanner } from "../src/ejercicio-4/Scanner";
import { PrinterScanner } from "../src/ejercicio-4/PrinterScanner";

describe('Printer', () => {
  test('should print correctly', () => {
    const printer = new Printer();
    const consoleSpy = vi.spyOn(console, 'log'); 
    printer.print();
    expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    consoleSpy.mockRestore(); 
  });
});

describe('Scanner', () => {
  test('should scan correctly', () => {
    const scanner = new Scanner();
    const consoleSpy = vi.spyOn(console, 'log'); 
    scanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    consoleSpy.mockRestore(); 
  });
});

describe('PrinterScanner', () => {
  test('should print correctly', () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, 'log'); 
    printerScanner.print();
    expect(consoleSpy).toHaveBeenCalledWith('Printing...');
    consoleSpy.mockRestore(); 
  });

  test('should scan correctly', () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, 'log'); 
    printerScanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith('Scanning...');
    consoleSpy.mockRestore(); 
  });
});
