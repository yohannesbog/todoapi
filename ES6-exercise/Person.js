class person {
    constructor(name) {
        this.name = name
        this.health = 100;
        this.weapon = null;

    }
    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    attack(person) {
       person.health=  person.health -this.weapon.damage
   
 }

}

// const play = new person('jo')
// console.log(play.equipWeapon())