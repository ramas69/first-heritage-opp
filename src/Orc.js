import Personnage from "./Personnage";
class Orc extends Personnage{
    constructor(nom, vie, force, muscle){
      super(nom , vie,force)
      this.muscle = muscle;
    }
  
   
  }
  export default Orc;