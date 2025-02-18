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
}

class Warrior  {
}

class Mage {

    cast() {
        console.log(`${this.name} щось там чаклує 🧙‍♂️`);
    }
}

// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);
