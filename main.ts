basic.forever(function () {
    music.setVolume(255)
    music.play(music.stringPlayable("E E E G G G G C5 ", 500), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 19; index++) {
        music.setVolume(255)
    }
})
