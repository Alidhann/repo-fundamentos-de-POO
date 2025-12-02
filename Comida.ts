//Israel Belueta Ponce

export abstract class Comida {

    private nombre: string;
    private calorias: number;

    constructor(nombre: string, calorias: number) {
        this.nombre = nombre;
        this.calorias = calorias;
    }

    getNombre(): string {
        return this.nombre;
    }

    getCalorias(): number {
        return this.calorias;
    }

    mostrarInformacion(): void {
        console.log(` Info: ${this.nombre} tiene ${this.calorias} calorías.`);
    }

    abstract cocinar(): void;
}


export class Tacos extends Comida {
    private tipoTortilla: string;

    constructor(nombre: string, calorias: number, tipoTortilla: string) {
        super(nombre, calorias);
        this.tipoTortilla = tipoTortilla;
    }


    cocinar(): void {
        console.log(`Calentando tortilla de ${this.tipoTortilla}, asando carne y preparando tacos.`);
    }
}

export class Pasta extends Comida {
    private tipoSalsa: string;

    constructor(nombre: string, calorias: number, tipoSalsa: string) {
        super(nombre, calorias);
        this.tipoSalsa = tipoSalsa;
    }
    cocinar(): void {
        console.log(`Hirviendo agua, cociendo la pasta y agregando salsa ${this.tipoSalsa}.`);
    }
}

function probarRestaurante() {
}
probarRestaurante();