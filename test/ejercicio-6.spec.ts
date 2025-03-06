import { describe, test, expect, vi } from 'vitest';
import { Penguin } from '../src/ejercicio-6/Penguin'; 
import { Sparrow } from '../src/ejercicio-6/Sparrow'; 

describe('Sparrow', () => {
  test('should fly', () => {
    const sparrow = new Sparrow();
    const consoleSpy = vi.spyOn(console, 'log');
    sparrow.fly();
    expect(consoleSpy).toHaveBeenCalledWith('Flying...');
    consoleSpy.mockRestore();
  });
});

describe('Penguin', () => {
  test('should swim', () => {
    const penguin = new Penguin();
    const consoleSpy = vi.spyOn(console, 'log');
    penguin.swim();
    expect(consoleSpy).toHaveBeenCalledWith('Swimming...');
    consoleSpy.mockRestore();
  });
});