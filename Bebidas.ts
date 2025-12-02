//Eduardo Lopez Madera

export abstract class Bebidas {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre
        this.precio = precio
    }

    getNombre(): string {
        return this.nombre
    }

    setNombre(nombre: string): void {
        this.nombre = nombre
    }

    getPrecio(): number {
        return this.precio
    }

    setPrecio(precio: number): void {
        this.precio = precio
    }

    abstract info(): void



}

export class Jugo extends Bebidas {

    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }

    info(): void {
        console.log(`${this.getNombre()} tiene el precio de ${this.getPrecio()}`)
    }

}

export class Refresco extends Bebidas {

    constructor(nombre: string, precio: number) {
        super(nombre, precio)
    }

    info(): void {
        console.log(`${this.getNombre()} tiene un precio de ${this.getPrecio()} pesos`)
    }
}