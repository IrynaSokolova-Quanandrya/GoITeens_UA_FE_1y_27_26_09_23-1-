/*
 * Наслідування
 *  - extends
 *  - super()
 */

/*
 * name
 * xp
 * gainXp(amount)
 * weapon
 * attack()
 * warcry
 * spells
 * cast
 */
class Hero {
    constructor({name, xp}) {
        this.name = name
        this.xp = xp
    }

}

class Warrior extends Hero {
    constructor({ weapon }) {
        super()
       this.weapon = weapon
    }
    
}
const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });

class Mage extends Hero{
    constructor({ spells }) {
        super()
        this.spells = spells
    }

    cast() {
        console.log(`${this.name} щось там чаклує 🧙‍♂️`);
    }
}
const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });

// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);
