import Personnage from "./Personnage"
import Orc from './Orc'

class Guerrier extends Personnage{
    constructor(nom, vie,force,resistance){
      super(nom , vie,force)
      this.resistance = resistance;
    }
  
    attaque (personne){
     // console.log("instance " + personne instanceof Orc)
      if(personne instanceof Orc){
        personne.vie -=35;
        return "Biien fait"
      }
      else{
        return "Tu es un allié";
      }
    }
  }

  export default Guerrier;