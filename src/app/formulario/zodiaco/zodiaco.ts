export class Zodiaco {

  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  anio: number = 0;
  mes: number = 0;
  dia: number = 0;
 
  nombreCompleto: string = '';
  edad: number = 0;
  signoChino: string = '';
  indice: number = 0;
 
  private animales = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragon', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
  private anioInicio = 1924;
 
  procesar(): void{
 
    this.nombreCompleto = `${this.nombre} ${this.apaterno} ${this.amaterno}`;
    this.calcularEdad();
    this.obtenerSignoChino();
   
  }
 
  calcularEdad(): void {
 
    this.edad = new Date().getFullYear() - this.anio;
 
    if (new Date().getMonth() < (this.mes - 1) || (new Date().getMonth() === (this.mes - 1) && new Date().getDate() < this.dia)){
 
      this.edad--;
 
    }
  }
 
  obtenerSignoChino(): void {
 
    this.indice = (this.anio - this.anioInicio) % 12;
    this.signoChino = this.animales [this.indice >= 0 ? this.indice : this.indice + 12];
 
  }

}