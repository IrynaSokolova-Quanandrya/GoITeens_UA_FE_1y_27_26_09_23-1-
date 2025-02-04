/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

// чому ми бачимо кілька консолей?
const numbers = [5, 10, 15, 20, 25];

const newNumbers = numbers.map(function (number) { return 'hello'})

console.log(newNumbers);
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

/*
 * Отримуємо масив імен всіх гравців
 */


// console.log('playerNames', playerNames);

// console.log('playerIds', playerIds);


/*
 * Змінюємо властивість online на протилежну. Повернути масив гравців зі зміненою властивістю online
 */

const changePlayers = players.map(function(player) {
  // { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false }
  return {
    ...player,
    points: player.points + 10,     
  }
})

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Збільшуємо кількість годин гравця по id
 */

const playerIdToUpdate = 'player-3';

const upgradePlayer = function (players, playerIdToUpdate) {}
upgradePlayer(players, 'player-3')

// Переписуємо на тернарник
// console.table(updatedPlayers);