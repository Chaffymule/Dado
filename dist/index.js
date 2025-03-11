var _a;
import { JuegoDados } from "./juegadados.js";
(_a = document.getElementById("iniciarJuego")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const nombre1 = document.getElementById("jugador1").value;
    const nombre2 = document.getElementById("jugador2").value;
    if (nombre1 && nombre2) {
        const juego = new JuegoDados(nombre1, nombre2);
        document.getElementById("log").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        juego.iniciarJuego();
    }
    else {
        alert("Ingresa nombres para ambos jugadores.");
    }
});
