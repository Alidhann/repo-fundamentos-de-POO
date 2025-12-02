//Clase de postres-Equipo 2
export abstract class Postre {

  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getPrecio(): number {
    return this.precio;
  }


  abstract describir(): void;
}



export class Pastel extends Postre {
  constructor(nombre: string, precio: number) {
    super(nombre, precio);
  }


  describir(): void {
    console.log(`El pastel "${this.getNombre()}" es dulce y esponjoso.`);
  }
}

// HERENCIA: Gelatina extiende Postre
export class Gelatina extends Postre {
  constructor(nombre: string, precio: number) {
    super(nombre, precio);
  }

  describir(): void {
    console.log(`La gelatina "${this.getNombre()}" es fresca y ligera.`);
  }
}