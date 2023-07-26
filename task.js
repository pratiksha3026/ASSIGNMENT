class UserPlaylistTemplate {
    constructor(capacity) {
        this.capacity = capacity
        this.playlist = [];
    }
    addSong(song) {
        // we are creating the new array with , if provided song are available in playedList then we are filtering that.
        this.playlist = this.playlist.filter((playedSongs) => playedSongs !== song)
        //    adding the song in last of array
        this.playlist.push(song)
        //  checking the playlist length is less than capacity if it is greater than capasity then we are removingm last song from the list
        if (this.playlist.length > this.capacity) {
            console.log(`capacity is more than ${this.capacity}`)
            this.playlist.shift()
        }

    }
    getRecentPlayedSong() {
        // print the same list as playList saved,
        console.log(this.playlist)
    }

}

class storingAndDisplayingPlaylist {
    constructor() {
        // we are taking object to store the playlist with user key.
        this.store = {}
    }

    addRecentPlayed(user, song) {
        // if user is not already created then creating with 3
        if (!this.store[user]) {
            // here we are creating the userPlayList with capacity 3 (can add 3 song)
            this.store[user] = new UserPlaylistTemplate(3)
        }
        this.store[user].addSong(song)

    }
    getRecentlyPlayed(user) {

        if (this.store[user]) {
            // if user exist then it will retunr the recent played list
            return this.store[user].getRecentPlayedSong();
        } else {
            // if user not available then will retun the empty.
            return [];
        }
    }
}



let savan = new storingAndDisplayingPlaylist()

//adding
savan.addRecentPlayed("user1", "song-1")
savan.addRecentPlayed("user1", "song-2")
savan.addRecentPlayed("user1", "song-3")
savan.addRecentPlayed("user1", "song-4")
savan.addRecentPlayed("user1", "song-2")

savan.addRecentPlayed("user2", "song-2")
savan.addRecentPlayed("user2", "song-1")

//printing
savan.getRecentlyPlayed("user1")
savan.getRecentlyPlayed("user2")
