export class Distancia {

  x1: number = 0;
    y1: number = 0;
    x2: number = 0;
    y2: number = 0;
    distanciaFinal: number = 0;
    
    calcularDistancia(): void {
       
    const distanciaX = this.x2 - this.x1;
    const distanciaY = this.y2 - this.y1;
    const distanciaCuadrado = ((distanciaX * distanciaX) + (distanciaY * distanciaY));
    this.distanciaFinal = Math.sqrt(distanciaCuadrado); 
  }
}
