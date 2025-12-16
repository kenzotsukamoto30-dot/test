def on_forever():
    music.play(music.string_playable("- - - - B - - - ", 120),
        music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
