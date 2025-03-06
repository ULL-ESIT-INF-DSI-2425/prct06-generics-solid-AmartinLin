# Práctica 6 - principios SOLID
## Procedimiento
Hemos aceptado la tarea y realizado las actividades que se proponen.
## Actividades 
### Ejercicio 3
```typescript
import * as fs from "fs";

class FileManager {
  constructor(private filePath: string) {}

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

// Client code
const fileManager = new FileManager("example.txt");

// Reading content
const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);
```
El código proporcionado viola los principios de responsabilidad única (SRP) ya que  file manager tiene más de una responsabilidad y viola el principio de inversión de dependencias (DIP), ya que la clase `FileManager` depende directamente de fs que es una implementación concreta, lo que dificulta la sustitución de otro tipo de mecanismos.

### Ejercicio 4
```typescript
interface PrintableScannable {
  print(): void
  scan(): void
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class Scanner implements PrintableScannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
  }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
```
El código proporcionado viola el Principio de Segregación de Interfaces (ISP) de los principios SOLID. Debido a que una clase no debería implementar métodos que no necesita.

### Ejercicio 5
```typescript
// Class that allows notifications by email to be sent
class EmailService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Class that allows notifications by SMS to be sent
class ShortMessageService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Class that makes use of different types of services to perform notifications
class Notifier {
  constructor(private notificationService: EmailService | ShortMessageService) {
  }

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
```
El código viola el principio de inversión de dependencias (DIP) de los principios SOLID. La clase Notifier depende directamente de las implementaciones concretas ``EmailService`` y ``ShortMessageService``. Esto hace que el diseño sea rígido y difícil de extender. Lo que va en contra del principio de abierto/cerrado (OCP).

### Ejercicio 6
La jerarquia principal de clases es la siguiente:
```typescript 
class Bird {
  fly(): void {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {}
```
Como pingüino no puede volar se estaría violando el principio de segregación de interfaces (ISP) de los principios SOLID (Los clientes no deben verse obligados a depender de interfaces que no utilizan). 
En lugar de tener una clase base Bird con un método fly(), podemos crear interfaces separadas para representar comportamientos específicos, como Flyable y Swimmable