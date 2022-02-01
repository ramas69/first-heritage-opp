import Personnage from './Personnage'
import Guerrier  from './Guerrier';
import Orc from './Orc';



class Magicien extends Personnage{
  constructor(nom, vie, force, magie){
    super(nom , vie,force)
    this.magie = magie;
  }
}


class Elfe extends Personnage{
  constructor(nom, vie, force, intelligence){
    super(nom , vie,force)
    this.intelligence = intelligence;
  }
}

let thor = new Guerrier ("Thor",100, 56, 100);
console.log(thor)
let gandalf  = new Magicien("Gandalf", 100, 67,100);
console.log(gandalf);
let legolas = new Elfe("Legolas", 100, 100, 150);
let azog = new Orc("Azog", 100, 150, 100);
console.log("Avant "+azog.vie);
console.log(thor.attaque(azog));
console.log("Apres "+azog.vie);