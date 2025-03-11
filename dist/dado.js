export class Dado {
    constructor() {
        this.puntos = 1;
    }
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
