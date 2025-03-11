import { Jugador } from "./jugador.js";
import { Dado } from "./dado.js";

export class JuegoDados {
    jugador1: Jugador;
    jugador2: Jugador;
    dado1: Dado;
    dado2: Dado;
    marcadorJugador1: number;
    marcadorJugador2: number;
    cantidadJugadas: number;
    vencedor: Jugador | null;

    constructor(nombreJugador1: string, nombreJugador2: string) {
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.cantidadJugadas = 0;
        this.vencedor = null;
    }

    iniciarJugada(): void {
        const puntosJ1 = this.jugador1.lanzaDados(this.dado1, this.dado2);
        const puntosJ2 = this.jugador2.lanzaDados(this.dado1, this.dado2);

        if (puntosJ1 === 7) this.jugador1.puntoGanado = 1;
        else this.jugador1.puntoGanado = 0;

        if (puntosJ2 === 7) this.jugador2.puntoGanado = 1;
        else this.jugador2.puntoGanado = 0;

        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;

        this.cantidadJugadas++;
    }

    iniciarJuego(): void {
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.cantidadJugadas = 0;

        do {
            this.iniciarJugada();
            this.actualizarPantalla();
        } while (this.marcadorJugador1 < 5 && this.marcadorJugador2 < 5);

        this.vencedor = this.determinarVencedor();
        this.mostrarGanador();
    }

    determinarVencedor(): Jugador | null {
        if (this.marcadorJugador1 === 5) return this.jugador1;
        if (this.marcadorJugador2 === 5) return this.jugador2;
        return null;
    }

    actualizarPantalla(): void {
        const logElement = document.getElementById("log");
        if (logElement) {
            logElement.innerHTML += `<p>Jugada ${this.cantidadJugadas}: ${this.jugador1.nombre} (${this.marcadorJugador1}) - ${this.jugador2.nombre} (${this.marcadorJugador2})</p>`;
        }
    }
    
    mostrarGanador(): void {
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            if (this.vencedor) {
                resultadoElement.innerHTML = `<h2>¡El ganador es ${this.vencedor.nombre}!</h2>`;
            } else {
                resultadoElement.innerHTML = `<h2>¡Empate!</h2>`;
            }
        }
    }
    
}
