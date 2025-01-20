/*
 * Работа с колекцією (масивом об"ектів)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

console.table(friends);
  
// Додаємо властивість до кожного об"єкта за допомогою циклу
  
for (const friend of friends) {
  console.log(friend.name);
}
  
  /*
   * Шукаємо друга по імені
   */
  
  const findFriendByName = function (allFriends, nameToFind) {};
  findFriendByName(friends, 'Kiwi')
  /*
   * Отримуємо імена всіх друзів
   */
  
  const getAllNames = function (allFriends) {};
  
  /*
   * Отримуємо імена тільки тих друзів які онлайн
   */
  
  const getOnlineFriends = function (allFriends) {}
  
  const getOfflineFriends = function (allFriends) {};
  
    
  // створити 2 масива онлайн і офлайн?
  // якщо тру - в перший, якщо ні - в другий
  
  const getFriendsByStatus = function () {};
  
  // const friendByStat = {
  //   onlineFriends: [],
  //   offlineFriends: [],
  // }
  // console.log(getFriendsByStatus(friends));