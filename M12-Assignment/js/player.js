class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
    returnAlbum = function (num) {
        return this.albums[num]
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const albumArray = [
    ['Operation Ivy', 'Energy'],
    ['Blink 182', 'Dude Ranch'],
    ['New Found Glory', 'Sticks and Stones']
]
let albums = document.getElementById('albums')
let play = document.getElementById('play')
let showFav = document.getElementById('favorite')
let displayFav = document.getElementById('favoriteAlbum')

for (let i = 0; i < albumArray.length; i++) {
    jbox.addAlbum(new Album(albumArray[i][0], albumArray[i][1]))
    albums.add(new Option(albumArray[i][0] + ' ' + albumArray[i][1], i))
}

play.addEventListener('click', () => {
    jbox.returnAlbum(albums.value).play()
    console.log(jbox.returnAlbum(albums.value).display())
})

showFav.addEventListener('click', () => {
    displayFav.innerHTML = jbox.favoriteAlbum()
})
