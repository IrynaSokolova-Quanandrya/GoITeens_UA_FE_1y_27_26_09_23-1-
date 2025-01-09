/*
 * Методи об"екту і this при звернені до властивостей в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */
const playlist = {
      name: 'Плейлист',
      rating: 5,
      tracks: ['трек-1', 'трек-2', 'трек-3'],
      changeName(newName) {
            this.name = newName
      }
}

playlist.changeName('My playlist')
console.log(playlist);





