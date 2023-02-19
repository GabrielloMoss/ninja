class Ninja {
    constructor(nombre, salud= 20, velocidad=3, fuerza=3) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
    }
    
    sayName() {
      console.log(`Mi nombre es ${this.nombre}`);
    }
    
    showStats() {
      console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }
    
    drinkSake() {
      this.salud += 10;
      console.log(`Al beber este mágico elixir me siento con mucha vitalidad + ${this.salud}`);
    }
  }

  const ninja1 = new Ninja("Naruto");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();

  const ninja2 = new Ninja("Sasuke");
 
  ninja2.sayName();
  ninja2.showStats();
  ninja2.drinkSake();

