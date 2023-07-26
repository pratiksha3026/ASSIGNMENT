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
            //if capacity is more than length we are removing first song
            this.playlist.shift()
        }

    }
    getRecentPlayedSong() {
        // return the same list as playList saved,
        return this.playlist
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
            // if user exist then it will print the recent played list
            console.log(this.store[user].getRecentPlayedSong());
        } else {
            // if user not available then printing below error
            console.error("user not available in memory")
         
        }
    }
}



let savan = new storingAndDisplayingPlaylist()

//example- 1
//adding songs to user1
savan.addRecentPlayed("user1", "song-1")
savan.addRecentPlayed("user1", "song-2")
savan.addRecentPlayed("user1", "song-3")
savan.addRecentPlayed("user1", "song-4")
savan.addRecentPlayed("user1", "song-2")

//printing playlist for user1
savan.getRecentlyPlayed("user1")


//example- 2

//adding songs to user2
savan.addRecentPlayed("user2", "song-2")
savan.addRecentPlayed("user2", "song-1")

//printing
savan.getRecentlyPlayed("user2")
//savan.getRecentlyPlayed("user2")


//example-3
savan.getRecentlyPlayed("user3")
