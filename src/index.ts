import { JuegoDados } from "./juegadados.js";

document.getElementById("iniciarJuego")?.addEventListener("click", () => {
    const nombre1 = (document.getElementById("jugador1") as HTMLInputElement).value;
    const nombre2 = (document.getElementById("jugador2") as HTMLInputElement).value;

    if (nombre1 && nombre2) {
        const juego = new JuegoDados(nombre1, nombre2);
        document.getElementById("log")!.innerHTML = ""; 
        document.getElementById("resultado")!.innerHTML = ""; 
        juego.iniciarJuego();
    } else {
        alert("Ingresa nombres para ambos jugadores.");
    }
});
