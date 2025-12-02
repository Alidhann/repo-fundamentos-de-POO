//objetos de cada clase
import { Jugo } from "./Bebidas";
import { Pastel } from "./clase-postres";
import { Gelatina } from "./clase-postres";
import { Tacos } from "./Comida";
import { Pasta } from "./Comida";

//Bebidas

const Jugo1 = new Jugo("Jugo de Naranja", 26)
Jugo1.info();

//Postre
const pastel = new Pastel("Chocolate", 80);
const gelatina = new Gelatina("Frutos Rojos", 30);

pastel.describir();
gelatina.describir();

//Comida
const tacos = new Tacos("Tacos al pastor", 3000, "Maiz");
const pasta = new Pasta("Pasta Alfredo", 450, "Alfredo");
function probarRestaurante() {
  tacos.mostrarInformacion();
  tacos.cocinar();
  pasta.mostrarInformacion();
  pasta.cocinar();
}