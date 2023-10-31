namespace SpriteKind {
    export const NPC1 = SpriteKind.create()
}
function Ocean_1 () {
    game.showLongText("What type of fish is Jaques in finding nemo? ", DialogLayout.Bottom)
    story.showPlayerChoices("Fish ", "Shrimp")
    if (story.checkLastAnswer("Shrimp")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(2)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar_2 () {
    game.showLongText("What is largest planet in the in the solar system. ", DialogLayout.Bottom)
    story.showPlayerChoices("Sun", "Jupiter")
    if (story.checkLastAnswer("Jupiter")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Earth_2 () {
    game.showLongText("What was Pangaea? ", DialogLayout.Bottom)
    story.showPlayerChoices("A cheese", "Supercontinent ")
    if (story.checkLastAnswer("Supercontinent")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Air_3 () {
    game.showLongText("A space that contains no air or any gas is known as?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Vacumm", "Dark matter")
    if (story.checkLastAnswer("Vacumm")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Earth1 () {
    game.showLongText("What is earth's atmosphere mostly made of?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Nitrogen", "Hygrogen")
    if (story.checkLastAnswer("Nitrogen")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Air_2 () {
    game.showLongText(" Which gas in the atmosphere saves us from the UV rays of the sun?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Ozone ", "Humidity")
    if (story.checkLastAnswer("Ozone")) {
        info.changeScoreBy(3)
    } else {
        info.changeScoreBy(-1)
    }
}
function Earth_3 () {
    game.showLongText("Where did the first earth's life develop? ", DialogLayout.Bottom)
    story.showPlayerChoices("Forrest", "Ocean")
    if (story.checkLastAnswer("Ocean")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar_1 () {
    game.showLongText(" How many planets are there in the solar system ", DialogLayout.Bottom)
    story.showPlayerChoices("9", "8")
    if (story.checkLastAnswer("8")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Air_1 () {
    game.showLongText("Air is a?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Water", "Gas")
    if (story.checkLastAnswer("Gas")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Solar3 () {
    game.showLongText(" What protects Earth from meteoroids & radiation from the sun?  ", DialogLayout.Bottom)
    story.showPlayerChoices("Its atmosphere", "intelligence")
    if (story.checkLastAnswer("Its atmosphere")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Ocean_3 () {
    game.showLongText("Where is the labrador in the ocean? ", DialogLayout.Bottom)
    story.showPlayerChoices("The shore ", "Atlantic")
    if (story.checkLastAnswer("Shrimp")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(3)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function Ocean_2 () {
    game.showLongText("Which of the following do octopuses lack?", DialogLayout.Bottom)
    story.showPlayerChoices("blood", "Bones")
    if (story.checkLastAnswer("bones")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Correct!")
        info.changeScoreBy(-1)
    }
}
Solar_1()
let mySprite2 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f b f f f f f f f 
    f f f f f f f b d b f f f f f f 
    f f f f f f f c d c f f f f f f 
    f f f f f f f c 5 c f f f f f f 
    f f f f f f c d 5 d c f f f f f 
    f f f b c c d 5 5 5 d c c b f f 
    f f b d d 5 5 5 5 5 5 5 d d b f 
    f f f b c c d 5 5 5 d c c b f f 
    f f f f f f c d 5 d c f f f f f 
    f f f f f f f c 5 c f f f f f f 
    f f f f f f f c d c f f f f f f 
    f f f f f f f b d b f f f f f f 
    f f f f f f f f b f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
pause(1000)
let mySprite5 = sprites.create(img`
    . . . . . . 3 3 . . . . . . . . 
    . . . . . . 3 1 3 . . . . . . . 
    . . 3 3 . . 3 1 3 . . 3 3 . . . 
    . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
    . . . 3 1 3 3 1 3 2 1 3 . . . . 
    3 3 3 3 2 1 3 1 1 1 3 . . . . . 
    3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
    . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
    . . . . . 2 1 1 1 3 3 2 3 3 3 . 
    . . . . 3 1 3 1 3 1 2 . . . . . 
    . . . 3 1 3 2 1 3 3 1 3 . . . . 
    . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
    . . 3 3 . . 3 1 3 . . 3 3 . . . 
    . . . . . . 3 1 3 . . . . . . . 
    . . . . . . 3 1 3 . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    `, SpriteKind.Player)
Solar_2()
pause(1000)
let mySprite6 = sprites.create(img`
    . . . . . b b . . . . . . . . . 
    . . . . b 5 b b . . . . . . . . 
    . . b b 5 5 5 b b b . . . . . . 
    . b 5 5 5 5 5 5 5 b . . b . . . 
    . . b b 5 5 5 b b . . b 5 b . . 
    . . b 5 5 b 5 5 b . b 5 5 5 b . 
    . . b 5 b b b 5 b . . b 5 b . . 
    . . b b . . b b b . . b b b . . 
    . b 5 b b . . . . . b 5 b . . . 
    b 5 5 5 b b . . . b b 5 b b . . 
    . b 5 b b 5 b . b 5 5 5 5 5 b . 
    . b b b 5 5 5 b b b 5 5 5 b b . 
    . . b 5 5 5 5 5 b b 5 b 5 b . . 
    . . . b 5 5 5 b . . b b b . . . 
    . . . b 5 b 5 b . . . . . . . . 
    . . . b b b b b . . . . . . . . 
    `, SpriteKind.Player)
Solar3()
let mySprite = sprites.create(img`
    ....................
    ....................
    ...............9.9..
    ..............99999.
    ..9.9..........999..
    .99999..........9...
    .99999..............
    ..999...............
    ...9................
    ....................
    ....................
    .........9....9.....
    ........999..999....
    .......9999999999...
    .......9999999999...
    ........99999999....
    .........999999.....
    ..........9999......
    ...........99.......
    ....................
    `, SpriteKind.Player)
pause(1000)
Air_1()
let mySprite3 = sprites.create(img`
    .........bbbb...........
    .......bb1111bb.........
    ......bb111111bbbbb.....
    ......b1111111ddd11b....
    ......b11111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d11111111111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111d11111dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    `, SpriteKind.Player)
pause(1000)
Air_2()
mySprite3 = sprites.create(img`
    . . . . . . . . b b . . . . . . 
    . . . . . . . b 9 1 b . . . . . 
    . . b b . . . b 9 9 b . . . . . 
    . b 9 1 b . . b b b . . b b b . 
    . b 3 9 b . b b b b . b 9 9 1 b 
    . b b b b b 9 9 1 1 b b 3 9 9 b 
    . . . . b 9 d 9 1 1 b b b b b . 
    . . . . b 5 3 9 9 9 b . . . . . 
    . . b b b 5 3 3 d 9 b . . . . . 
    . b 5 1 b b 5 5 9 b b b b . . . 
    . b 5 5 b b b b b b 3 9 9 3 . . 
    . b b b b b b b . b 9 1 1 9 b . 
    . . . b 5 5 1 b . b 9 1 1 9 b . 
    . . . b 5 5 5 b . b 3 9 9 3 b . 
    . . . . b b b . . . b b b b . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Air_3()
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . 2 2 1 1 1 1 2 . . 
    . . . . 2 2 3 3 1 1 1 1 1 1 . . 
    . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
    . . . . . . 2 2 3 1 1 1 1 2 . . 
    . . . . . . . . . 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
pause(1000)
Earth1()
let mySprite4 = sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b 9 9 9 9 9 9 b b . . . 
    . . b b 9 9 9 9 9 9 9 9 b b . . 
    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
    . b 9 d 9 9 9 9 9 7 7 7 9 9 b . 
    b 9 d d 9 9 9 9 9 7 7 7 9 9 9 b 
    b 9 d 9 9 9 9 9 9 7 7 7 9 9 9 b 
    b 9 7 9 9 9 9 9 9 9 9 9 1 9 9 b 
    b 1 7 d 9 9 9 9 9 9 9 9 9 9 9 b 
    b 1 7 7 9 9 9 9 9 9 9 9 9 d 9 b 
    b 1 d 7 7 7 9 9 9 9 9 9 d d 9 b 
    . b 1 7 7 7 d 9 9 9 9 d d 1 b . 
    . b 1 1 7 7 7 7 7 7 7 d 1 1 b . 
    . . b 1 1 d 7 7 7 7 1 1 1 b . . 
    . . . b 1 1 1 1 1 1 1 1 b . . . 
    . . . . . b b b b b b . . . . . 
    `, SpriteKind.Player)
pause(1000)
Earth_2()
mySprite4 = sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.Player)
pause(1000)
mySprite4 = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . b b d d b b . 
    b 1 1 3 3 1 1 b 
    b 1 3 5 5 3 1 b 
    b d 3 5 5 3 d b 
    c 1 1 d d 1 1 c 
    c d 1 d d 1 d c 
    . c c 7 6 c c . 
    . . 6 7 6 . . . 
    . . 6 6 8 8 8 6 
    . . 6 8 7 7 7 6 
    . . 8 7 7 7 6 . 
    . . 8 8 8 6 . . 
    `, SpriteKind.Player)
Earth_3()
mySprite4 = sprites.create(img`
    .................ccfff..............
    ................cddbbf..............
    ...............cddbbf...............
    ..............fccbbcf............ccc
    ........ffffffccccccff.........ccbbc
    ......ffbbbbbbbbbbbbbcfff.....cdbbc.
    ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
    ....fbbb1111ff1bcbcbbbcccccccbbbcf..
    .....fb11111111bbbbbbcccccccccbccf..
    ......fccc33cc11bbbbccccccccfffbbcf.
    .......fc131c111bbbcccccbdbc...fbbf.
    ........f33c111cbbbfdddddcc.....fbbf
    .........ff1111fbdbbfddcc........fff
    ...........cccccfbdbbfc.............
    .................fffff..............
    `, SpriteKind.Player)
pause(1000)
Ocean_1()
mySprite4 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    .........888....
    .......88668....
    ......86688.....
    .....8768.......
    ....8778........
    ....8778........
    ...8778.........
    ...8578.........
    ...8558.........
    ...8758......88.
    ...87678....878.
    ...87678...878..
    ....87678.8768..
    ....876768678...
    .....87668778...
    ......8668766...
    .......8687678..
    ........8667678.
    ........8685756.
    ....88..86665756
    ...868..86685656
    ..8668..86687678
    .8668..868687678
    .868..8688667678
    8768.88886876778
    8768.8888877678.
    876688888676778.
    87676888668778..
    .876776868668...
    .87766778868....
    ..877667688.....
    ...86767788.....
    `, SpriteKind.Player)
pause(1000)
Ocean_2()
mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
pause(1000)
Ocean_3()
