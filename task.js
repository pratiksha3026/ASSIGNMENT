class UserPlaylistTemplate {
    constructor(capacity) {
        this.capasity = capacity
        this.playlist = [];
    }
    addSong(song) {
        // we are creating the new array with , if provided song are available in playedList then we are filtering that.
        this.playlist = this.playlist.filter((playedSongs) => playedSongs !== song)
        //   adding the song in last of array
        this.playlist.push(song)
        //  checking the playlist length is less than capacity if it is greater than capaCity then we are removingm last song from the list
        if (this.playlist.length > this.capasity) {
            console.log(`capacity is more than ${this.capasity}`)
            this.playlist.pop()
        }

    }
    getRecentPlayedSong() {
        // print the same list as playList saved,
        console.log(this.playlist)
    }

}
