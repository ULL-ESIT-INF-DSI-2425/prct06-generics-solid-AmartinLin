import { Observer } from "./elementoObservador.js";

/**
 * Interface for observable classes
 */
export interface Observable {
  // cambioTemp(observer: Observer): void;
  // tormenta(observer: Observer): void;
  notify(): void;
  subscribe(observer: Observer): string;
  unsubscribe(observer: Observer): string;
}

export enum WeatherChanges {'NO_EVENT', 'lluvias', 'tormenta', 'temperatura'};

export class Meteo implements Observable {
  private observers: Observer[] = [];

  private eventType: WeatherChanges = WeatherChanges.NO_EVENT;

  constructor(
    private temp: number,
    private tormenta: boolean,
    private lluviasPercent: number,
  ) {}

  getEventType() {
    return this.eventType;
  }

  getTemp() {
    return this.temp;
  }

  getTormenta() {
    return this.tormenta;
  }

  getLluvias() {
    return this.lluviasPercent;
  }

  /**
   * Añade un nuevo observador
   * @param observer - objeto observador
   * @returns string
   */
  subscribe(observer: Observer): string {
    if (this.observers.includes(observer)) {
      return ('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
      return ('The observer has been subscribed');
    }
  }

  /**
   * elimina un observador añadido previamente
   * @param observer - objeto observador
   * @returns 
   */
  unsubscribe(observer: Observer): string {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      return ('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
      return ('The observer has been unsubscribed');
    }
  }

  /**
   * Metodo que se llama cada que se modifica algun parametro de este objeto
   * (notifica a los objetos que observan)
   */
  notify(): void {
    this.observers.forEach((observer) => observer.update(this, this.temp, this.lluviasPercent, this.tormenta));
  }

  /**
   * Hace un cambio de parametros de temeperatura y notifica 
   * @param newTemp - number
   */
  cambioTemp(newTemp: number): void {
    this.eventType = WeatherChanges.temperatura
    this.temp = newTemp;
    this.notify();
  }

  /**
   * Hace un cambio de parámetros de tormenta y notifica
   * @param aviso - boolean
   */
  Tormenta(aviso: boolean): void {
    this.eventType = WeatherChanges.tormenta;
    this.tormenta = aviso;
    this.notify();
  }

  /**
   * Hace un cambio de parámetros de tormenta y notifica
   * @param porcentajeNuevo - number
   */
  cambioLluvias(porcentajeNuevo: number): void {
    this.eventType = WeatherChanges.lluvias;
    this.lluviasPercent = porcentajeNuevo;
    this.notify();
  }
}
