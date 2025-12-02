//Clase de postres-Equipo 2
class Postre {

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


  public describir(): void {
    console.log("Este es un postre.");
  }
}


class Pastel extends Postre {
  constructor(nombre: string, precio: number) {
    super(nombre, precio);
  }


  public describir(): void {
    console.log(`El pastel "${this.getNombre()}" es dulce y esponjoso.`);
  }
}

// HERENCIA: Gelatina extiende Postre
class Gelatina extends Postre {
  constructor(nombre: string, precio: number) {
    super(nombre, precio);
  }

  public describir(): void {
    console.log(`La gelatina "${this.getNombre()}" es fresca y ligera.`);
  }
}