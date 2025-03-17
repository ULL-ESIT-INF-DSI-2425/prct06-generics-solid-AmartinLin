import { Meteo, Observable, WeatherChanges } from "./estacionMeteo.js";

/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable, temperatura: number, lluvias: number, tormenta: boolean): void;
}

export class MeteoObserver implements Observer {
  constructor(
    private temp: number,
    private tormenta: boolean,
    private lluviasPercent: number,
  ) {}

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
   * Refresca los parametros cuando el objeto observable se modifica
   * @param observable - observable
   * @param temperatura - number
   * @param lluvias - number
   * @param tormenta - boolean
   */
  update(observable: Observable, temperatura: number, lluvias: number, tormenta: boolean): void {
    if (observable instanceof Meteo) {
      switch(observable.getEventType()) {
        case WeatherChanges.temperatura:
          this.temp = temperatura;
          this.lluviasPercent = lluvias;
          this.tormenta = tormenta;
          console.log(`la temperatura ha cambiado
                  temperatura ${temperatura}
                  lluvias: ${lluvias}
                  Tormenta: ${tormenta}`);
          break;
        case WeatherChanges.tormenta:
          this.temp = temperatura;
          this.lluviasPercent = lluvias;
          this.tormenta = tormenta;
          console.log(`Aviso de tormenta
            temperatura ${temperatura}
            lluvias: ${lluvias}
            Tormenta: ${tormenta}`);
          break;
        case WeatherChanges.lluvias:
          this.temp = temperatura;
          this.lluviasPercent = lluvias;
          this.tormenta = tormenta;
          console.log(`Nueva probabilidad de lluvias
            temperatura ${temperatura}
            lluvias: ${lluvias}
            Tormenta: ${tormenta}`);
          break;
      }
    }
  }
}