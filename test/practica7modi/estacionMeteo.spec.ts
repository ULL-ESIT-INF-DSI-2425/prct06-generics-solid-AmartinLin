import { describe, test, expect, vi } from "vitest";
import { Meteo } from "../../src/practica7modi/estacionMeteo"
import { MeteoObserver } from "../../src/practica7modi/elementoObservador"

describe("cambioTemp", () => {
  test("cambio de temperatura", () => {
    const estacion = new Meteo(12, false, 10);
    estacion.cambioTemp(20);
    expect(estacion.getTemp()).toBe(20)
  });
});

describe("cambioLluvia", () => {
  test("cambio de porcentaje de lluvias", () => {
    const estacion = new Meteo(12, false, 10);
    estacion.cambioLluvias(93.3);
    expect(estacion.getLluvias()).toBe(93.3);
  });
});

describe("tormenta", () => {
  test("aviso de tormentas", () => {
    const estacion = new Meteo(12, false, 10);
    estacion.Tormenta(true);
    expect(estacion.getTormenta()).toBe(true);
  });
});

describe("subscribe", () => {
  test("un elemento se subscribe", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    expect(estacion.subscribe(telefono)).toBe('The observer has been subscribed');
  });
  test("un elemento ya estaba suscrito", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    estacion.subscribe(telefono)
    expect(estacion.subscribe(telefono)).toBe('The observer had already been subscribed');
  });
});

describe("unsubscribe", () => {
  test("un elemento se quita", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    estacion.subscribe(telefono);
    expect(estacion.unsubscribe(telefono)).toBe('The observer has been unsubscribed');
  });

  test("un elemento no estaba de antes", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    expect(estacion.unsubscribe(telefono)).toBe('The observer has not been subscribed');
  });
});


describe("notify", () => {
  test("se notifica a los subscriptores de un cambio", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    const tablet = new MeteoObserver(12, false, 10);
    estacion.subscribe(telefono);
    estacion.subscribe(tablet);
    const estacionSpy = vi.spyOn(estacion, "notify");
    const telefonoSpy = vi.spyOn(telefono, "update");
    estacion.cambioLluvias(45.9);
    expect(estacionSpy).toBeCalled();
    expect(telefonoSpy).toBeCalled();
    estacionSpy.mockRestore();
    telefonoSpy.mockRestore();
  });
});

describe("update", () => {
  test("comprobacion del mensaje devuelto según update", () => {
    const estacion = new Meteo(12, false, 10);
    const telefono = new MeteoObserver(12, false, 10);
    const tablet = new MeteoObserver(12, false, 10);
    estacion.subscribe(telefono);
    estacion.subscribe(tablet);
    const estacionSpy = vi.spyOn(estacion, "notify");
    const telefonoSpy = vi.spyOn(console, "log");
    estacion.cambioLluvias(45.9);
    expect(estacionSpy).toBeCalled();
    expect(telefonoSpy).toBeCalledWith(`Nueva probabilidad de lluvias
            temperatura 12
            lluvias: 45.9
            Tormenta: false`);
    estacionSpy.mockRestore();
    telefonoSpy.mockRestore();
  });
});