enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Killer = SpriteKind.create()
    export const baby_killer = SpriteKind.create()
    export const Ghost_block = SpriteKind.create()
    export const Jumpy_thing = SpriteKind.create()
    export const Target1 = SpriteKind.create()
    export const Target2 = SpriteKind.create()
    export const Target3 = SpriteKind.create()
    export const Target4 = SpriteKind.create()
    export const Something = SpriteKind.create()
    export const slamma = SpriteKind.create()
    export const Slog = SpriteKind.create()
    export const Secret_food = SpriteKind.create()
    export const TACO = SpriteKind.create()
    export const tf2 = SpriteKind.create()
    export const Tf2_thing = SpriteKind.create()
    export const THing_2 = SpriteKind.create()
    export const Scattergog = SpriteKind.create()
    export const Heart_1 = SpriteKind.create()
    export const Heart_2 = SpriteKind.create()
    export const Heart_3 = SpriteKind.create()
    export const Heart_4 = SpriteKind.create()
    export const Boss_Type_1 = SpriteKind.create()
    export const Left_side = SpriteKind.create()
    export const Right_side = SpriteKind.create()
    export const Boss_shooter_working = SpriteKind.create()
    export const Boss_projectile = SpriteKind.create()
    export const Puter = SpriteKind.create()
    export const Quick_time_food = SpriteKind.create()
}
namespace StatusBarKind {
    export const Scorhealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Scattergog, function (sprite, otherSprite) {
    sprites.destroy(Scatteredgug, effects.warmRadial, 200)
    Have_scatter = 1
    game.showLongText("Yo you just picked up Scout TF2's legendary scattergun, press X on your keyboard to send out a multi directional blast", DialogLayout.Bottom)
    tiles.setWallAt(tiles.getTileLocation(7, 1), false)
    tiles.setWallAt(tiles.getTileLocation(8, 1), false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.tf2, function (sprite, otherSprite) {
    timer.throttle("Scouch", 400, function () {
        sprites.destroy(sprite)
        Scot_tf2_heatl.value += -10
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (Room_ID == 5) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.setWallAt(tiles.getTileLocation(0, 7), false)
        tiles.setWallAt(tiles.getTileLocation(7, 0), false)
        tiles.setWallAt(tiles.getTileLocation(0, 8), false)
        tiles.setWallAt(tiles.getTileLocation(8, 0), false)
        Item_2 += -1
        Room_ID = 0
        mySprite.setPosition(134, 220)
        if (puzzle_solved == 1) {
            tiles.setWallAt(tiles.getTileLocation(7, 15), false)
            tiles.setWallAt(tiles.getTileLocation(8, 15), false)
            tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
            tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
        } else {
            Puzzle_thing = sprites.create(img`
                . . . b b b b b b b b b . . . . 
                . . b 1 d d d d d d d 1 b . . . 
                . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
                . b d b c c c c c c c b d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 d 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c c c c c c c c c d b . . 
                . c b b b b b b b b b b b c . . 
                c b c c c c c c c c c c c b c . 
                c 1 d d d d d d d d d d d 1 c . 
                c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
                c b b b b b b b b b b b b b c . 
                c c c c c c c c c c c c c c c . 
                `, SpriteKind.Puter)
            tiles.placeOnTile(Puzzle_thing, tiles.getTileLocation(7, 13))
        }
        if (Item_2 == 0) {
            sprites.destroy(Thing)
        }
    } else {
        if (Room_ID == 0) {
            tiles.setCurrentTilemap(tilemap`level16`)
            Room_ID = 4
            mySprite.setPosition(125, 210)
            if (Pc_working == 1) {
                sprites.destroy(Puzzle_thing)
            }
            if (Target_life == 0) {
                tiles.setTileAt(tiles.getTileLocation(7, 0), sprites.dungeon.doorOpenNorth)
            } else {
                Target1 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target1)
                Target2 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target2)
                Target3 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target3)
                Target4 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target4)
                tiles.placeOnTile(Target1, tiles.getTileLocation(11, 4))
                tiles.placeOnTile(Target2, tiles.getTileLocation(4, 11))
                tiles.placeOnTile(Target3, tiles.getTileLocation(11, 11))
                tiles.placeOnTile(Target4, tiles.getTileLocation(4, 4))
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    if (Room_ID == 0) {
        Item_2 += 1
        mySprite.setPosition(134, 40)
        Room_ID = 5
        tiles.setCurrentTilemap(tilemap`level19`)
        if (Pc_working == 1) {
            sprites.destroy(Puzzle_thing)
        }
        if (Item_2 == 1) {
            Thing = sprites.create(img`
                ..................................bbbbbb........................................
                .............................bbbbbb.....b.......................................
                ............................b..........bb.......................................
                ...........................b.ffffffffff.bb......................................
                ..........................b.ffffffffffff..b.....................................
                ..........................b.ffffffffffffff.b....................................
                ..........................bfffffffffffffff.bb...................................
                ...........................fffffffffffffffffb...................................
                ..........................fffffdddddddddffffb...................................
                ..........................dddddfffddffffdfffb...................................
                .......................ddddddddddddddddddd..b...................................
                .......................d4ddddd1661dd1661dd.dddd.................................
                .......................d4ddddd1661dd1661dd.dddddddd.............................
                .......................dd4ddddddddfddddddffff4dddddddddd111.....................
                ........................ddddddddddfdfddddfff44...ddddddd111b111.................
                .........................ddddddddfddfddddfff44....dddddd11bb111b................
                ..........................dddddddfffdddddfff44...ddddddd11b111bb11..............
                ...........................d4d11dddd11fd.........ddddddd11b11bb111b1............
                ...........................dd4ff1111ffb..2..........dddd1bb11b111bb1d...........
                .....................22222bddd4dfffff4bb222222.............1bb11bb1dddd.........
                ..................22222222bdddd44dd44dbb222222222222222......111b1dddddd........
                ................222222222bddddddd44ddbb2222222222222222ddddd....b1dddddddd......
                .............222222222222b2ddddddddddb22222222222222222ddddddd....ddddddddd.....
                ............2222222222222b2222ddddddbb22222222222222222dddddddddd..ddddddddd....
                ...........222222222222222b222222222b222222222222222222ddddddddddddddddddddd....
                ............222222222222222b2222222bb222222222222222222ddddddddddddddddddddd....
                ...........dd222222222222222b222222b2222222222222222222.dddddddddddddddddddd....
                ...........ddd222222222222222b2222bb222222222222222.......ddddddddddddddddd.....
                ...........dddd2222222222222bbb33332222222222222222.............ddddddd.........
                ...........dddddd22222222222bbbb333222222222222222..............................
                ....e......dddddd2222222222bbbbb33322222222222222...............................
                ..........ddddddd22222222222bbb33332222222222222................................
                ..........ddddddd22222222222222233222222222222..................................
                .........dddddddd22222222222222222222222222222..................................
                .........ddddddd222222222222222222222222222222..................................
                ........ddddddd2222222222222222222222222222222..................................
                ........ddddddd2222222222222222222222222222222..................................
                .......ddddddd.2222222222222222222222222222222..................................
                .......dddddd..2222222222222222222222222222222..................................
                .......dddddd..2222222222222222222222222222222..................................
                .......ddddd...2222222222222222222222222222222..................................
                ......dddddd...2222222222222222222222222222222..................................
                ......dddddd...22222222222222222222222222222222.................................
                ......dddddd...22222222222222222222222222222222.................................
                .....ddddddd...22222222222222222222222222222222.................................
                .....ddddddd..222222222222222222222222222222222.................................
                .....ddddddd..222222222222222222222222222222222.................................
                .....ddddddd..222222222222222222222222222222222.................................
                .....dddddd..2222222222222222222222222222222222.................................
                .....ddddd....222222222222222222222222222222222.................................
                .....1111d.....ff22222222222222222222222222222..................................
                .....bbb11.....fffff22222222222222222222222fff..................................
                ....1111bbb....eeffffffbbbbbbbbbbbbbffffffffff..................................
                ....bbb111b....eeeeffffbbbbbbbbbbbbbfffffffeee..................................
                ....111bbb11...eeeeeeefbbbbbbbbbbbbbfffeeeeeeee.................................
                ...1b1111dbbb.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.................................
                ...11bbbbdd...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................
                ...ddddddddd..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...............................
                ...dddddddd...eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
                ...dddddddd..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............................
                ...dddddddd..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............................
                .....dddddd..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee............................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee...........................
                ............eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..........................
                ............eeeeeeeeeeeeeee.......eeeeeeeeeeeeeeeeeeeee.........................
                ............eeeeeeeeeeeeeee............eeeeeeeeeeeeeeee.........................
                ............eeeeeeeeeeeee..............eeeeeeeeeeeeeeeee........................
                ............eeeeeeeeeeeee..............eeeeeeeeeeeeeeeee........................
                ............eeeeeeeeeeeee...............eeeeeeeeeeeeeeeee.......................
                ............eeeeeeeeeeee.................eeeeeeeeeeeeeeee.......................
                ............eeeeeeeeeeee..................eeeeeeeeeeeeeeee......................
                ............eeeeeeeeeeee...................eeeeeeeeeeeeeee......................
                ............eeeeeeeeeeee...................eeeeeeeeeeeeeeee.....................
                ............eeeeeeeeeeee....................eeeeeeeeeeeeeee.....................
                ............eeeeeeeeeeee....................eeeeeeeeeeeeeee.....................
                ...........eeeeeeeeeeeeee...................eeeeeeeeeeeeeee.....................
                ...........eeeeeeeeeeeee....................eeeeeeeeeeeeeeee....................
                ...........eeeeeeeeeeeee.....................eeeeeeeeeeeeeee....................
                ...........eeeeeeeeeeeee.....................eeeeeeeeeeeeeee....................
                ..........eeeeeeeeeeeeee.....................eeeeeeeeeeeeeee....................
                ..........eeeeeeeeeeeeee.....................eeeeeeeeeeeeeee....................
                ..........eeeeeeeeeeeeee......................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeee......................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeee......................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeee......................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeee.....................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeee......................eeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeee......................eeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeee......................eeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeee......................eeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeeee.....................eeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeeee.....................eeeeeeeeeeeeee...................
                ............eeeeeeeeeeeeee.....................eeeeeeeeeeeeee...................
                ............eeeeeeeeeeeeee.....................eeeeeeeeeeeeee...................
                ............eeeeeeeeeeeeee.....................eeeeeeeeeeeeee...................
                ............eeeeeeeeeeeeee.....................eeeeeeeeeeeee....................
                ...........eeeeeeeeeeeeeeeee..................eeeeeeeeeeeeeee...................
                ...........eeeeeeeeeeeeeeee....................eeeeeeeeeeeee....................
                ...............1111111111........................1111111111.....................
                ...............1111111111........................1111111111.....................
                ...............1111111111........................1111111111.....................
                ...............1111111111........................1111111111.....................
                ...............111111111..........................111111111.....................
                ...............111111111..........................111111111.....................
                ...............111111111..........................1111111111....................
                ...............111111111..........................1111111111....................
                ...............111111111...........................111111111....................
                ...............111111111...........................111111111....................
                ...............111111111............................11111111....................
                ...............111111111............................11111111....................
                ...............ffff1111f............................11111111....................
                ..............ffffffffff............................1ffffff1....................
                ............fff11ffffffff..........................fffffff1ff...................
                .........fff1fff11fffffff..........................ffffff11f11ffff..............
                .......fffff11fff1fffffff..........................ffffff1ff1fffff..............
                ........fffff11ffffffffff..........................ffffffffffffffff.............
                `, SpriteKind.TACO)
            Thing.setPosition(134, 140)
        }
    }
    if (Room_ID == 4) {
        mySprite.setPosition(134, 35)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.setWallAt(tiles.getTileLocation(0, 7), false)
        tiles.setWallAt(tiles.getTileLocation(8, 0), false)
        tiles.setWallAt(tiles.getTileLocation(7, 0), false)
        tiles.setWallAt(tiles.getTileLocation(0, 8), false)
        Room_ID = 0
        if (puzzle_solved == 1) {
            tiles.setWallAt(tiles.getTileLocation(7, 15), false)
            tiles.setWallAt(tiles.getTileLocation(8, 15), false)
            tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
            tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
        } else {
            Puzzle_thing = sprites.create(img`
                . . . b b b b b b b b b . . . . 
                . . b 1 d d d d d d d 1 b . . . 
                . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
                . b d b c c c c c c c b d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 d 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c c c c c c c c c d b . . 
                . c b b b b b b b b b b b c . . 
                c b c c c c c c c c c c c b c . 
                c 1 d d d d d d d d d d d 1 c . 
                c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
                c b b b b b b b b b b b b b c . 
                c c c c c c c c c c c c c c c . 
                `, SpriteKind.Puter)
            tiles.placeOnTile(Puzzle_thing, tiles.getTileLocation(7, 13))
        }
        if (Target_room_door_thingy == 0) {
            sprites.destroy(Target1)
            sprites.destroy(Target2)
            sprites.destroy(Target3)
            sprites.destroy(Target4)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Puter, function (sprite, otherSprite) {
    timer.throttle("Solving", 15000, function () {
        game.splash("Welcome to the riddle door.", "Your riddle is:")
        Puzzle_answer = game.askForNumber("How many fingers does a man with 9 fingers have?")
        timer.after(500, function () {
            if (Puzzle_answer == 9) {
                if (Hard_mode_true == 1) {
                    game.splash("its hard mode, so answer another")
                    Puzzle_answer = game.askForNumber("Type in 4")
                    timer.after(500, function () {
                        if (Puzzle_answer == 4) {
                            puzzle_solved = 1
                            tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
                            tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
                            tiles.setWallAt(tiles.getTileLocation(8, 15), false)
                            tiles.setWallAt(tiles.getTileLocation(7, 15), false)
                            game.splash("Good job")
                            sprites.destroy(otherSprite, effects.fountain, 500)
                        } else {
                            game.splash("Really?")
                            sprites.destroy(otherSprite, effects.fountain, 500)
                            Pc_working = 0
                            timer.after(5000, function () {
                                sprites.destroy(mySprite)
                            })
                        }
                    })
                } else {
                    puzzle_solved = 1
                    tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
                    tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
                    tiles.setWallAt(tiles.getTileLocation(8, 15), false)
                    tiles.setWallAt(tiles.getTileLocation(7, 15), false)
                    game.splash("Good job")
                    sprites.destroy(otherSprite, effects.fountain, 500)
                    Pc_working = 0
                }
            } else {
                if (Puzzle_answer == 777777) {
                    game.splash("OH BOY BIG LOTTERY SLOT MACHINE BIG WIN        MAJOR WIN BIG CASH YOU'RE WINNER HUGE CASH           $99.95 WOOHOO HUGE DOLLAR WIN BIG CASH")
                    game.setGameOverEffect(true, effects.starField)
                    game.gameOver(true)
                } else {
                    game.splash("just stop playing this game. In what world does a 9 fingered man have " + Puzzle_answer + " fingers?", " LEAVE THE GAME! LEAVE THE GAME! LEAVE THE GAME! LEAVE THE GAME! LEAVE THE GAME!")
                    game.splash("As I said, stop playing", "this game")
                    game.splash("But fine, go ahead anyway.")
                    sprites.destroy(otherSprite, effects.fountain, 500)
                    Pc_working = 0
                    tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
                    tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
                    tiles.setWallAt(tiles.getTileLocation(8, 15), false)
                    tiles.setWallAt(tiles.getTileLocation(7, 15), false)
                    timer.after(25000, function () {
                        game.splash("Hey Hey", "Remember that riddle?")
                        game.splash("Get pranked", "You failed the riddle")
                        game.setGameOverEffect(false, effects.dissolve)
                        game.gameOver(false)
                    })
                }
            }
        })
    })
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Have_scatter == 1) {
        timer.throttle("Scout_gunF2", 5000, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 90, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 90)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -90, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -90)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 5 5 5 . . . 
                . . . . . . . . . . 5 5 5 . . . 
                . . . . . . . . . 5 5 5 5 . . . 
                . . . . . . . . 5 5 5 . . . . . 
                . . . . . . . . 5 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 90, -90)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 5 . . . . . . . . 
                . . . . . 5 5 5 . . . . . . . . 
                . . . 5 5 5 5 . . . . . . . . . 
                . . . 5 5 5 . . . . . . . . . . 
                . . . 5 5 5 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -90, 90)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . . . . 5 5 5 . . . . 
                . . . . . . . . . . 5 5 5 5 . . 
                . . . . . . . . . . . 5 5 5 . . 
                . . . . . . . . . . . 5 5 5 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 90, 90)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 5 5 5 . . . . . . . . . . . 
                . . 5 5 5 . . . . . . . . . . . 
                . . 5 5 5 5 . . . . . . . . . . 
                . . . . 5 5 5 . . . . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -90, -90)
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Killer, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar.value += -50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target1, function (sprite, otherSprite) {
    sprites.destroy(Target1, effects.disintegrate, 400)
    Target_room_door_thingy += 1
    timer.after(200, function () {
        if (Target_room_door_thingy == Target_room_door_thingy_2) {
            timer.after(300, function () {
                Target1 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target1)
                tiles.placeOnTile(Target1, tiles.getTileLocation(11, 4))
                tiles.setTileAt(tiles.getTileLocation(7, 0), sprites.dungeon.doorOpenNorth)
                timer.after(150, function () {
                    sprites.destroy(Target1)
                    sprites.destroy(Target2)
                    sprites.destroy(Target3)
                    sprites.destroy(Target4)
                    Target_room_door_thingy += -1
                    Target_life = 0
                    music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 85, 255, 3000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                })
            })
        } else {
            timer.after(300, function () {
                Target_room_door_thingy += -1
                Target1 = sprites.create(img`
                    ....................
                    ..1111111111111111..
                    .111111111111111111.
                    .111ffffffffffff111.
                    .11ffffffffffffff11.
                    .11fff99999999fff11.
                    .11ff9999999999ff11.
                    .11ff9992222999ff11.
                    .11ff9922222299ff11.
                    .11ff9922552299ff11.
                    .11ff9922552299ff11.
                    .11ff9922222299ff11.
                    .11ff9992222999ff11.
                    .11ff9999999999ff11.
                    .11fff99999999fff11.
                    .11ffffffffffffff11.
                    .111ffffffffffff111.
                    .111111111111111111.
                    ..1111111111111111..
                    ....................
                    `, SpriteKind.Target1)
                tiles.placeOnTile(Target1, tiles.getTileLocation(11, 4))
            })
        }
    })
})
statusbars.onZero(StatusBarKind.Scorhealth, function (status) {
    Scatteredgug = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        .....c..........................
        ......cccccccccccccc............
        .....c..cddddddddddd............
        .....ecccccccccccccc............
        ....eeeeeeeeeeeeeeee............
        ...eeeeec.......................
        ..eeeee.c.......................
        ..eeeeec.c......................
        ..eeeec..c......................
        ..eeee.cc.......................
        ...ee...........................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Scattergog)
    Scatteredgug.setPosition(Thing.x, Thing.y)
    Scout_lifer = 1
    Item_2 += 10
    game.showLongText("ScoutTF2: \"Uhh this does not look good\"", DialogLayout.Bottom)
    sprites.destroy(Thing, effects.disintegrate, 1000)
    Scatteredgug.changeScale(0.75, ScaleAnchor.Middle)
    Heart_1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Heart_1)
    Heart_2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Heart_1)
    Heart_3 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Heart_1)
    Heart_4 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Heart_1)
    Heart_1.setPosition(60, 140)
    Heart_2.setPosition(200, 140)
    Heart_3.setPosition(134, 200)
    Heart_4.setPosition(134, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target3, function (sprite, otherSprite) {
    sprites.destroy(Target3, effects.disintegrate, 400)
    timer.after(500, function () {
        Target3 = sprites.create(img`
            ....................
            ..1111111111111111..
            .111111111111111111.
            .111ffffffffffff111.
            .11ffffffffffffff11.
            .11fff99999999fff11.
            .11ff9999999999ff11.
            .11ff9992222999ff11.
            .11ff9922222299ff11.
            .11ff9922552299ff11.
            .11ff9922552299ff11.
            .11ff9922222299ff11.
            .11ff9992222999ff11.
            .11ff9999999999ff11.
            .11fff99999999fff11.
            .11ffffffffffffff11.
            .111ffffffffffff111.
            .111111111111111111.
            ..1111111111111111..
            ....................
            `, SpriteKind.Target3)
        tiles.placeOnTile(Target3, tiles.getTileLocation(11, 11))
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("shooter", 750, function () {
        if (controller.left.isPressed() || Walking_direction == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                f f f f f 
                f 8 9 9 f 
                f 8 6 9 f 
                f 8 8 8 f 
                f f f f f 
                `, mySprite, -85, 0)
            timer.after(749, function () {
                sprites.destroy(projectile)
            })
        } else {
            if (controller.right.isPressed() || Walking_direction == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    f f f f f 
                    f 8 9 9 f 
                    f 8 6 9 f 
                    f 8 8 8 f 
                    f f f f f 
                    `, mySprite, 85, 0)
                timer.after(749, function () {
                    sprites.destroy(projectile)
                })
            } else {
                if (controller.up.isPressed() || Walking_direction == 2) {
                    projectile = sprites.createProjectileFromSprite(img`
                        f f f f f 
                        f 8 9 9 f 
                        f 8 6 9 f 
                        f 8 8 8 f 
                        f f f f f 
                        `, mySprite, 0, -85)
                    timer.after(749, function () {
                        sprites.destroy(projectile)
                    })
                } else {
                    if (controller.down.isPressed() || Walking_direction == 3) {
                        projectile = sprites.createProjectileFromSprite(img`
                            f f f f f 
                            f 8 9 9 f 
                            f 8 6 9 f 
                            f 8 8 8 f 
                            f f f f f 
                            `, mySprite, 0, 85)
                        timer.after(749, function () {
                            sprites.destroy(projectile)
                        })
                    }
                }
            }
        }
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Killer, function (sprite, otherSprite) {
    timer.throttle("Youch", 1500, function () {
        info.changeLifeBy(randint(-1, -1))
        The_killer.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f f f f . 
            . . . . . . . . . . f f . . f f 
            . . . . . . . . . . f f . f . f 
            . . . . . . . . . . . f . . f f 
            . . . . f f f f f f f f f f f . 
            . . . . f . f . . f . f f f . . 
            . . f f . f f . . f f . . f f . 
            . . f . . f . . . . . f f . . f 
            . f . . f . . . . . . . . f . f 
            . f . . f . . . . . . . . . f . 
            . f . . f . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.setVelocity(The_killer.vx * 2, The_killer.vy * 2)
        timer.after(300, function () {
            mySprite.setVelocity(0, 0)
            The_killer.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . f f f f . 
                . . . . . . . . . . f f . . f f 
                . . . . . . . . . . f f . f . f 
                . . . . . . . . . . . f . . f f 
                . . . . f f f f f f f f f f f . 
                . . . . f . f . . f . f f f . . 
                . . f f . f f . . f f . . f . . 
                . . f . . f . . . . f . . f . . 
                . f . . f . . . . . f . . . f . 
                . f . . f . . . . . f f . . . f 
                . f . . f . . . . . . f . . . f 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        })
    })
})
sprites.onOverlap(SpriteKind.Boss_Type_1, SpriteKind.Left_side, function (sprite, otherSprite) {
    sprite.setVelocity(40, 0)
    sprite.setImage(img`
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff
        `)
    boss_fire_true = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    if (Room_ID == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite.setPosition(20, 125)
        tiles.setWallAt(tiles.getTileLocation(0, 7), false)
        tiles.setWallAt(tiles.getTileLocation(7, 0), false)
        tiles.setWallAt(tiles.getTileLocation(0, 8), false)
        tiles.setWallAt(tiles.getTileLocation(8, 0), false)
        Room_ID = 0
        if (puzzle_solved == 1) {
            tiles.setWallAt(tiles.getTileLocation(7, 15), false)
            tiles.setWallAt(tiles.getTileLocation(8, 15), false)
            tiles.setTileAt(tiles.getTileLocation(8, 15), sprites.dungeon.doorOpenSouth)
            tiles.setTileAt(tiles.getTileLocation(7, 15), sprites.dungeon.doorOpenSouth)
        } else {
            Puzzle_thing = sprites.create(img`
                . . . b b b b b b b b b . . . . 
                . . b 1 d d d d d d d 1 b . . . 
                . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
                . b d b c c c c c c c b d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 d 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c 6 6 6 6 6 6 6 c d b . . 
                . b d c c c c c c c c c d b . . 
                . c b b b b b b b b b b b c . . 
                c b c c c c c c c c c c c b c . 
                c 1 d d d d d d d d d d d 1 c . 
                c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
                c b b b b b b b b b b b b b c . 
                c c c c c c c c c c c c c c c . 
                `, SpriteKind.Puter)
            tiles.placeOnTile(Puzzle_thing, tiles.getTileLocation(7, 13))
        }
    }
    if (Room_ID == 3) {
        tiles.setCurrentTilemap(tilemap`level2`)
        Room_ID = 1
        mySprite.setPosition(25, 95)
        if (Pc_working == 1) {
            sprites.destroy(Puzzle_thing)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target4, function (sprite, otherSprite) {
    sprites.destroy(Target4, effects.disintegrate, 400)
    timer.after(500, function () {
        Target4 = sprites.create(img`
            ....................
            ..1111111111111111..
            .111111111111111111.
            .111ffffffffffff111.
            .11ffffffffffffff11.
            .11fff99999999fff11.
            .11ff9999999999ff11.
            .11ff9992222999ff11.
            .11ff9922222299ff11.
            .11ff9922552299ff11.
            .11ff9922552299ff11.
            .11ff9922222299ff11.
            .11ff9992222999ff11.
            .11ff9999999999ff11.
            .11fff99999999fff11.
            .11ffffffffffffff11.
            .111ffffffffffff111.
            .111111111111111111.
            ..1111111111111111..
            ....................
            `, SpriteKind.Target4)
        tiles.placeOnTile(Target4, tiles.getTileLocation(4, 4))
    })
})
sprites.onDestroyed(SpriteKind.Boss_shooter_working, function (sprite) {
    if (boss_fire_true >= 1) {
        timer.after(200, function () {
            Thingy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Boss_shooter_working)
        })
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target2, function (sprite, otherSprite) {
    sprites.destroy(Target2, effects.disintegrate, 400)
    Target_room_door_thingy_2 += 1
    timer.after(200, function () {
        timer.after(300, function () {
            Target_room_door_thingy_2 += -1
            Target2 = sprites.create(img`
                ....................
                ..1111111111111111..
                .111111111111111111.
                .111ffffffffffff111.
                .11ffffffffffffff11.
                .11fff99999999fff11.
                .11ff9999999999ff11.
                .11ff9992222999ff11.
                .11ff9922222299ff11.
                .11ff9922552299ff11.
                .11ff9922552299ff11.
                .11ff9922222299ff11.
                .11ff9992222999ff11.
                .11ff9999999999ff11.
                .11fff99999999fff11.
                .11ffffffffffffff11.
                .111ffffffffffff111.
                .111111111111111111.
                ..1111111111111111..
                ....................
                `, SpriteKind.Target2)
            tiles.placeOnTile(Target2, tiles.getTileLocation(4, 11))
            tiles.setTileAt(tiles.getTileLocation(7, 0), sprites.dungeon.doorOpenNorth)
        })
    })
})
sprites.onOverlap(SpriteKind.Boss_Type_1, SpriteKind.Right_side, function (sprite, otherSprite) {
    if (Math.percentChance(100)) {
        sprite.setVelocity(-40, 0)
        animation.runImageAnimation(
        sprite,
        [img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffcccccffffffffffffffffffff
            fffffffffffffffffffcccccccfffffffffffffffffff
            fffffffffffffffffffcccccccfffffffffffffffffff
            fffffffffffffffffffcccccccfffffffffffffffffff
            fffffffffffffffffffcccccccfffffffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffcccccccccffffffffffffffffff
            fffffffffffffffffcccccccccccfffffffffffffffff
            ffffffffffffffffcccccccccccccffffffffffffffff
            fffffffffffffffcccccccccccccccfffffffffffffff
            ffffffffffffffccccccbbbbbccccccffffffffffffff
            ffffffffffffffcccccbbbbbbbcccccffffffffffffff
            ffffffffffffffcccccbbbbbbbcccccffffffffffffff
            ffffffffffffffcccccbbbbbbbcccccffffffffffffff
            ffffffffffffffcccccbbbbbbbcccccffffffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffcccccccccccfffffffffffffffff
            ffffffffffffffffcccccccccccccffffffffffffffff
            ffffffffffffffcccccccccccccccccffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            ffffffffffffcccccccccccccccccccccffffffffffff
            ffffffffffffccccccbbbbbbbbbccccccffffffffffff
            fffffffffffccccccbbbbbbbbbbbccccccfffffffffff
            ffffffffffccccccbbbbbbbbbbbbbccccccffffffffff
            ffffffffffcccccbbbbbbbbbbbbbbbcccccffffffffff
            ffffffffffccccbbbbbbaaaaabbbbbbccccffffffffff
            ffffffffffccccbbbbbaaaaaaabbbbbccccffffffffff
            ffffffffffccccbbbbbaaaaaaabbbbbccccffffffffff
            ffffffffffccccbbbbbaaaaaaabbbbbccccffffffffff
            ffffffffffccccbbbbbaaaaaaabbbbbccccffffffffff
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffcccccccccccfffffffffffffffff
            ffffffffffffffcccccccccccccccccffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            ffffffffffcccccccbbbbbbbbbbbcccccccffffffffff
            fffffffffcccccccbbbbbbbbbbbbbcccccccfffffffff
            ffffffffccccccbbbbbbbbbbbbbbbbbccccccffffffff
            ffffffffcccccbbbbbbbbbbbbbbbbbbbcccccffffffff
            fffffffcccccbbbbbbbbbbbbbbbbbbbbbcccccfffffff
            ffffffccccccbbbbbbaaaaaaaaabbbbbbccccccffffff
            ffffffcccccbbbbbbaaaaaaaaaaabbbbbbcccccffffff
            ffffffccccbbbbbbaaaaaaaaaaaaabbbbbbccccffffff
            fffffcccccbbbbbaaaaaaaaaaaaaaabbbbbcccccfffff
            fffffcccccbbbbaaaaaa88888aaaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffcccccccccccfffffffffffffffff
            ffffffffffffffcccccccccccccccccffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            ffffffffffcccccccbbbbbbbbbbbcccccccffffffffff
            fffffffffcccccccbbbbbbbbbbbbbcccccccfffffffff
            ffffffffccccccbbbbbbbbbbbbbbbbbccccccffffffff
            ffffffffcccccbbbbbbbbbbbbbbbbbbbcccccffffffff
            fffffffcccccbbbbbbbbbbbbbbbbbbbbbcccccfffffff
            ffffffccccccbbbbbbaaaaaaaaabbbbbbccccccffffff
            ffffffcccccbbbbbbaaaaaaaaaaabbbbbbcccccffffff
            ffffffccccbbbbbbaaaaaaaaaaaaabbbbbbccccffffff
            fffffcccccbbbbbaaaaaaaaaaaaaaabbbbbcccccfffff
            fffffcccccbbbbaaaaaa88888aaaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            fffffcccccbbbbaaaaa8888888aaaaabbbbcccccfffff
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffcccccccccccccffffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            ffffffffffcccccccccccccccccccccccccffffffffff
            fffffffffccccccccbbbbbbbbbbbccccccccfffffffff
            fffffffcccccccbbbbbbbbbbbbbbbbbcccccccfffffff
            ffffffcccccccbbbbbbbbbbbbbbbbbbbcccccccffffff
            ffffffcccccbbbbbbbbbbbbbbbbbbbbbbbcccccffffff
            fffffcccccbbbbbbbaaaaaaaaaaabbbbbbbcccccfffff
            ffffcccccbbbbbbbaaaaaaaaaaaaabbbbbbbcccccffff
            fffcccccbbbbbbaaaaaaaaaaaaaaaaabbbbbbcccccfff
            fffcccccbbbbbaaaaaaaaaaaaaaaaaaabbbbbcccccfff
            ffcccccbbbbbaaaaaaaaaaaaaaaaaaaaabbbbbcccccff
            ffccccbbbbbbaaaaaa888888888aaaaaabbbbbbccccff
            ffccccbbbbbaaaaaa88888888888aaaaaabbbbbccccff
            fcccccbbbbaaaaaa8888888888888aaaaaabbbbcccccf
            fccccbbbbbaaaaa888888888888888aaaaabbbbbccccf
            fccccbbbbbaaaa88888866666888888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffcccccccccccccffffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            ffffffffffcccccccccccccccccccccccccffffffffff
            fffffffffccccccccbbbbbbbbbbbccccccccfffffffff
            fffffffcccccccbbbbbbbbbbbbbbbbbcccccccfffffff
            ffffffcccccccbbbbbbbbbbbbbbbbbbbcccccccffffff
            ffffffcccccbbbbbbbbbbbbbbbbbbbbbbbcccccffffff
            fffffcccccbbbbbbbaaaaaaaaaaabbbbbbbcccccfffff
            ffffcccccbbbbbbbaaaaaaaaaaaaabbbbbbbcccccffff
            fffcccccbbbbbbaaaaaaaaaaaaaaaaabbbbbbcccccfff
            fffcccccbbbbbaaaaaaaaaaaaaaaaaaabbbbbcccccfff
            ffcccccbbbbbaaaaaaaaaaaaaaaaaaaaabbbbbcccccff
            ffccccbbbbbbaaaaaa888888888aaaaaabbbbbbccccff
            ffccccbbbbbaaaaaa88888888888aaaaaabbbbbccccff
            fcccccbbbbaaaaaa8888888888888aaaaaabbbbcccccf
            fccccbbbbbaaaaa888888888888888aaaaabbbbbccccf
            fccccbbbbbaaaa88888866666888888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffcccccccccccccffffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            ffffffffffcccccccccccccccccccccccccffffffffff
            fffffffffccccccccbbbbbbbbbbbccccccccfffffffff
            fffffffcccccccbbbbbbbbbbbbbbbbbcccccccfffffff
            ffffffcccccccbbbbbbbbbbbbbbbbbbbcccccccffffff
            ffffffcccccbbbbbbbbbbbbbbbbbbbbbbbcccccffffff
            fffffcccccbbbbbbbaaaaaaaaaaabbbbbbbcccccfffff
            ffffcccccbbbbbbbaaaaaaaaaaaaabbbbbbbcccccffff
            fffcccccbbbbbbaaaaaaaaaaaaaaaaabbbbbbcccccfff
            fffcccccbbbbbaaaaaaaaaaaaaaaaaaabbbbbcccccfff
            ffcccccbbbbbaaaaaaaaaaaaaaaaaaaaabbbbbcccccff
            ffccccbbbbbbaaaaaa888888888aaaaaabbbbbbccccff
            ffccccbbbbbaaaaaa88888888888aaaaaabbbbbccccff
            fcccccbbbbaaaaaa8888888888888aaaaaabbbbcccccf
            fccccbbbbbaaaaa888888888888888aaaaabbbbbccccf
            fccccbbbbbaaaa88888866666888888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            fccccbbbbbaaaa88888666666688888aaaabbbbbccccf
            `,img`
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffcccccccccccccccfffffffffffffff
            fffffffffffffcccccccccccccccccccfffffffffffff
            fffffffffffcccccccccccccccccccccccfffffffffff
            fffffffffcccccccbbbbbbbbbbbbbcccccccfffffffff
            fffffffccccccbbbbbbbbbbbbbbbbbbbccccccfffffff
            ffffffcccccbbbbbbbbbbbbbbbbbbbbbbbcccccffffff
            fffffcccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccfffff
            ffffcccccbbbbbbbbaaaaaaaaaaabbbbbbbbcccccffff
            fffccccbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbccccfff
            ffccccbbbbbbbaaaaaaaaaaaaaaaaaaabbbbbbbccccff
            ffccccbbbbbaaaaaaaaaaaaaaaaaaaaaaabbbbbccccff
            fccccbbbbbaaaaaaa88888888888aaaaaaabbbbbccccf
            fcccbbbbbaaaaaaa8888888888888aaaaaaabbbbbcccf
            cccbbbbbaaaaaa88888888888888888aaaaaabbbbbccc
            cccbbbbbaaaaa8888888888888888888aaaaabbbbbccc
            ccbbbbbaaaaa888888888888888888888aaaaabbbbbcc
            ccbbbbaaaaaa888888666666666888888aaaaaabbbbcc
            ccbbbbaaaaa88888866666666666888888aaaaabbbbcc
            cbbbbbaaaa8888886666666666666888888aaaabbbbbc
            cbbbbaaaaa8888866666666666666688888aaaaabbbbc
            cbbbbaaaaa8888666666ddddd6666668888aaaaabbbbc
            cbbbbaaaaa888866666ddddddd666668888aaaaabbbbc
            cbbbbaaaaa888866666ddddddd666668888aaaaabbbbc
            cbbbbaaaaa888866666ddddddd666668888aaaaabbbbc
            cbbbbaaaaa888866666ddddddd666668888aaaaabbbbc
            `],
        120,
        false
        )
        timer.after(1200, function () {
            boss_fire_true = 1
            Thingy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Boss_shooter_working)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Secret_food, function (sprite, otherSprite) {
    game.showLongText("Cheese Burger", DialogLayout.Bottom)
    game.showLongText("Secret attack: COMBO MEAL", DialogLayout.Bottom)
    Health_nonstatus.setImage(img`
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
        . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
        . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
        . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
        2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
        2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
        4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
        . . b b b b 2 4 4 2 b b b b . . 
        . b d d d d 2 4 4 2 d d d d b . 
        b d d b b b 2 4 4 2 b b b d d b 
        b d d b b b b b b b b b b d d b 
        b b d 1 1 3 1 1 d 1 d 1 1 d b b 
        . . b b d d 1 1 3 d d 1 b b . . 
        . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
        . . . 2 2 4 4 4 4 4 2 2 2 . . . 
        `)
    Health_nonstatus.setKind(SpriteKind.Something)
    Health_nonstatus.setScale(7, ScaleAnchor.Middle)
    timer.after(300, function () {
        game.gameOver(true)
    })
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    killer_alive = 0
    baby_killer = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . f f f . . . . 
        . . . . . . f f f . . . . 
        . . . . . . f f f . . . . 
        . . . . f f f f f f . . . 
        . . . f f f . f . f f . . 
        . . f f f . . f f . f f . 
        . . f . f . . . f . . f . 
        . . f . f . . . f . . f . 
        `, SpriteKind.Enemy)
    baby_killer_2 = sprites.create(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . f f f . . . . 
        . . . . . . f f f . . . . 
        . . . . . . f f f . . . . 
        . . . . f f f f f f . . . 
        . . . f f f . f . f f . . 
        . . f f f . . f f . f f . 
        . . f . f . . . f . . f . 
        . . f . f . . . f . . f . 
        `, SpriteKind.baby_killer)
    baby_killer.setPosition(The_killer.x, The_killer.y)
    baby_killer_2.setPosition(The_killer.x, The_killer.y)
    sprites.destroy(The_killer)
    baby_killer.setVelocity(50, 0)
    baby_killer_2.setVelocity(-50, 0)
    timer.after(300, function () {
        baby_killer.setVelocity(0, 0)
        baby_killer_2.setVelocity(0, 0)
        baby_killer_2.follow(mySprite, 0)
        baby_killer.follow(mySprite, 0)
        Jump_er = 0
        Theplaceholderreturns = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 3 
            `, SpriteKind.Jumpy_thing)
        Theplaceholderreturns.setPosition(1000, 1000)
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (Room_ID == 0) {
        tiles.setCurrentTilemap(tilemap`level2`)
        mySprite.setPosition(230, 95)
        Room_ID = 1
        if (Pc_working == 1) {
            sprites.destroy(Puzzle_thing)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart_1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    if (Hard_mode_true == 0) {
        info.changeLifeBy(1)
    }
})
controller.combos.attachCombo("UUDDLRLRBA", function () {
	
})
sprites.onDestroyed(SpriteKind.Jumpy_thing, function (sprite) {
    if (baby_killer.overlapsWith(baby_killer_2)) {
        baby_killer_2.follow(mySprite, 85)
        baby_killer.follow(mySprite, 90)
    } else {
        baby_killer.follow(mySprite, 90)
        baby_killer_2.follow(mySprite, 90)
    }
    timer.after(500, function () {
        if (Brotherly_love == 0 && Brotherly_love2 == 0) {
            if (baby_killer.overlapsWith(baby_killer_2)) {
                baby_killer.follow(mySprite, 5)
                baby_killer_2.follow(mySprite, 10)
            } else {
                baby_killer.follow(mySprite, 10)
                baby_killer_2.follow(mySprite, 10)
            }
        }
        timer.after(500, function () {
            Theplaceholderreturns = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 3 
                `, SpriteKind.Jumpy_thing)
            Theplaceholderreturns.setPosition(1000, 1000)
        })
    })
})
sprites.onCreated(SpriteKind.Tf2_thing, function (sprite) {
    if (Math.percentChance(20)) {
        Thing.setPosition(134, 140)
    }
    if (Math.percentChance(20)) {
        Thing.setPosition(200, 140)
    }
    if (Math.percentChance(20)) {
        Thing.setPosition(60, 140)
    }
    if (Math.percentChance(20)) {
        Thing.setPosition(134, 50)
    }
    if (Math.percentChance(20)) {
        Thing.setPosition(134, 200)
    }
    if (Scout_lifer == 0) {
        timer.after(1500, function () {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 0, -90)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, -90, 0)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 0, 90)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 90, 0)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            timer.after(500, function () {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 5 5 5 . . . . . . . . . . . 
                    . . 5 5 5 . . . . . . . . . . . 
                    . . 5 5 5 5 . . . . . . . . . . 
                    . . . . 5 5 5 . . . . . . . . . 
                    . . . . . 5 5 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, -90, -90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . 5 5 5 . . . . . . . . 
                    . . . 5 5 5 5 . . . . . . . . . 
                    . . . 5 5 5 . . . . . . . . . . 
                    . . . 5 5 5 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, -90, 90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 5 5 . . . . . 
                    . . . . . . . . . 5 5 5 . . . . 
                    . . . . . . . . . . 5 5 5 5 . . 
                    . . . . . . . . . . . 5 5 5 . . 
                    . . . . . . . . . . . 5 5 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, 90, 90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 5 5 5 . . . 
                    . . . . . . . . . . 5 5 5 . . . 
                    . . . . . . . . . 5 5 5 5 . . . 
                    . . . . . . . . 5 5 5 . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, 90, -90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                timer.after(1500, function () {
                    sprites.destroy(Whowouldhaveguessed)
                })
            })
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 3
})
controller.combos.attachCombo("LUBDAL", function () {
    Quick_time_event = 1
})
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
statusbars.onStatusReached(StatusBarKind.Scorhealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    Hurt_chaser += 1
})
sprites.onCreated(SpriteKind.Boss_shooter_working, function (sprite) {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 6 6 6 6 8 8 . . . . 
        . . . . 8 6 9 9 9 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 1 1 9 6 8 . . . . 
        . . . . 8 6 9 9 9 9 6 8 . . . . 
        . . . . . 8 6 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        `, Lava_man_IIV, 0, 60)
    projectile3.setKind(SpriteKind.Boss_projectile)
    projectile3.setPosition(Lava_man_IIV.x, Lava_man_IIV.y + 15)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("Eatin a burger with no honey mustard", DialogLayout.Bottom)
    sprites.destroy(NewBurg)
    Worthiness = 1
    if (Hard_mode_true == 0) {
        info.changeLifeBy(5)
    } else {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.baby_killer, function (sprite, otherSprite) {
    timer.throttle("Youch", 1500, function () {
        mySprite.x += 10
        info.changeLifeBy(randint(-1, -1))
        if (Brotherly_love == 1) {
            baby_killer_2.setImage(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                2 2 . . 2 . . . . . 2 . . 2 2 
                2 . 2 2 2 . . . . . 2 2 2 . 2 
                2 . 2 . . . . . . . . . 2 . 2 
                . 2 2 . . . . . . . . . 2 2 . 
                `)
            mySprite.setVelocity(baby_killer_2.vx * 2, baby_killer_2.vy * 2)
            timer.after(300, function () {
                baby_killer_2.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . 2 2 2 2 2 2 . . . 
                    . . . 2 2 2 . 2 . 2 2 . . 
                    . . 2 2 2 . . 2 2 . 2 2 . 
                    . . 2 . 2 . . . 2 . . 2 . 
                    . . 2 . 2 . . . 2 . . 2 . 
                    `)
                mySprite.setVelocity(0, 0)
            })
        } else {
            baby_killer_2.setImage(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . 
                . . . . . . f f f . . . . . . 
                . . . . . . f f f . . . . . . 
                . f f f f f f f f f f f f f . 
                f f . . f . . . . . f . . f f 
                f . f f f . . . . . f f f . f 
                f . f . . . . . . . . . f . f 
                . f f . . . . . . . . . f f . 
                `)
            mySprite.setVelocity(baby_killer_2.vx * 2, baby_killer_2.vy * 2)
            timer.after(300, function () {
                baby_killer_2.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . f f f . . . . 
                    . . . . . . f f f . . . . 
                    . . . . . . f f f . . . . 
                    . . . . f f f f f f . . . 
                    . . . f f f . f . f f . . 
                    . . f f f . . f f . f f . 
                    . . f . f . . . f . . f . 
                    . . f . f . . . f . . f . 
                    `)
                mySprite.setVelocity(0, 0)
            })
        }
    })
})
sprites.onCreated(SpriteKind.Jumpy_thing, function (sprite) {
    if (Jump_er == 0) {
        timer.after(1000, function () {
            sprites.destroy(Theplaceholderreturns)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    if (Room_ID == 1) {
        burg += 1
        tiles.setCurrentTilemap(tilemap`level12`)
        mySprite.setPosition(165, 95)
        Room_ID = 3
        if (Hard_mode_true == 1) {
            game.splash("Get ready for a quick time event")
            textSprite3 = textsprite.create("Left! Up! X! Down! Z! Left!")
            textSprite3.setPosition(mySprite.x - 20, mySprite.y - 15)
            timer.after(2750, function () {
                sprites.destroy(textSprite3)
                if (Quick_time_event == 1) {
                    timer.after(500, function () {
                        NewBurg = sprites.create(img`
                            ...........ccccc66666...........
                            ........ccc4444444444666........
                            ......cc444444444bb4444466......
                            .....cb4444bb4444b5b444444b.....
                            ....eb4444b5b44444b44444444b....
                            ...ebb44444b4444444444b444446...
                            ..eb6bb444444444bb444b5b444446..
                            ..e6bb5b44444444b5b444b44bb44e..
                            .e66b4b4444444444b4444444b5b44e.
                            .e6bb444444444444444444444bb44e.
                            eb66b44444bb444444444444444444be
                            eb66bb444b5b44444444bb44444444be
                            fb666b444bb444444444b5b4444444bf
                            fcb666b44444444444444bb444444bcf
                            .fbb6666b44444444444444444444bf.
                            .efbb66666bb4444444444444444bfe.
                            .86fcbb66666bbb44444444444bcc688
                            8772effcbbbbbbbbbbbbbbbbcfc22778
                            87722222cccccccccccccccc22226678
                            f866622222222222222222222276686f
                            fef866677766667777776667777fffef
                            fbff877768f86777777666776fffffbf
                            fbeffeefffeff7766688effeeeefeb6f
                            f6bfffeffeeeeeeeeeeeeefeeeeebb6e
                            f66ddfffffeeeffeffeeeeeffeedb46e
                            .c66ddd4effffffeeeeeffff4ddb46e.
                            .fc6b4dddddddddddddddddddb444ee.
                            ..ff6bb444444444444444444444ee..
                            ....ffbbbb4444444444444444ee....
                            ......ffebbbbbb44444444eee......
                            .........fffffffcccccee.........
                            ................................
                            `, SpriteKind.Food)
                        NewBurg.setPosition(128, 110)
                    })
                } else {
                    Health_nonstatus = sprites.create(img`
                        ...........ccccc66666...........
                        ........ccc4444444444666........
                        ......cc444444444bb4444466......
                        .....cb4444bb4444b5b444444b.....
                        ....eb4444b5b44444b44444444b....
                        ...ebb44444b4444444444b444446...
                        ..eb6bb444444444bb444b5b444446..
                        ..e6bb5b44444444b5b444b44bb44e..
                        .e66b4b4444444444b4444444b5b44e.
                        .e6bb444444444444444444444bb44e.
                        eb66b44444bb444444444444444444be
                        eb66bb444b5b44444444bb44444444be
                        fb666b444bb444444444b5b4444444bf
                        fcb666b44444444444444bb444444bcf
                        .fbb6666b44444444444444444444bf.
                        .efbb66666bb4444444444444444bfe.
                        .86fcbb66666bbb44444444444bcc688
                        8772effcbbbbbbbbbbbbbbbbcfc22778
                        87722222cccccccccccccccc22226678
                        f866622222222222222222222276686f
                        fef866677766667777776667777fffef
                        fbff877768f86777777666776fffffbf
                        fbeffeefffeff7766688effeeeefeb6f
                        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
                        f66ddfffffeeeffeffeeeeeffeedb46e
                        .c66ddd4effffffeeeeeffff4ddb46e.
                        .fc6b4dddddddddddddddddddb444ee.
                        ..ff6bb444444444444444444444ee..
                        ....ffbbbb4444444444444444ee....
                        ......ffebbbbbb44444444eee......
                        .........fffffffcccccee.........
                        ................................
                        `, SpriteKind.Quick_time_food)
                    Health_nonstatus.setPosition(128, 110)
                    timer.after(500, function () {
                        Health_nonstatus.setImage(img`
                            . . . . 2 2 2 2 2 2 2 2 . . . . 
                            . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
                            . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
                            . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
                            . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
                            2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
                            2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
                            4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
                            . . b b b b 2 4 4 2 b b b b . . 
                            . b d d d d 2 4 4 2 d d d d b . 
                            b d d b b b 2 4 4 2 b b b d d b 
                            b d d b b b b b b b b b b d d b 
                            b b d 1 1 3 1 1 d 1 d 1 1 d b b 
                            . . b b d d 1 1 3 d d 1 b b . . 
                            . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
                            . . . 2 2 4 4 4 4 4 2 2 2 . . . 
                            `)
                        Health_nonstatus.setScale(7, ScaleAnchor.Middle)
                        timer.after(500, function () {
                            game.setGameOverEffect(false, effects.dissolve)
                            game.gameOver(false)
                        })
                    })
                }
            })
        } else {
            if (burg == 1) {
                NewBurg = sprites.create(img`
                    ...........ccccc66666...........
                    ........ccc4444444444666........
                    ......cc444444444bb4444466......
                    .....cb4444bb4444b5b444444b.....
                    ....eb4444b5b44444b44444444b....
                    ...ebb44444b4444444444b444446...
                    ..eb6bb444444444bb444b5b444446..
                    ..e6bb5b44444444b5b444b44bb44e..
                    .e66b4b4444444444b4444444b5b44e.
                    .e6bb444444444444444444444bb44e.
                    eb66b44444bb444444444444444444be
                    eb66bb444b5b44444444bb44444444be
                    fb666b444bb444444444b5b4444444bf
                    fcb666b44444444444444bb444444bcf
                    .fbb6666b44444444444444444444bf.
                    .efbb66666bb4444444444444444bfe.
                    .86fcbb66666bbb44444444444bcc688
                    8772effcbbbbbbbbbbbbbbbbcfc22778
                    87722222cccccccccccccccc22226678
                    f866622222222222222222222276686f
                    fef866677766667777776667777fffef
                    fbff877768f86777777666776fffffbf
                    fbeffeefffeff7766688effeeeefeb6f
                    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
                    f66ddfffffeeeffeffeeeeeffeedb46e
                    .c66ddd4effffffeeeeeffff4ddb46e.
                    .fc6b4dddddddddddddddddddb444ee.
                    ..ff6bb444444444444444444444ee..
                    ....ffbbbb4444444444444444ee....
                    ......ffebbbbbb44444444eee......
                    .........fffffffcccccee.........
                    ................................
                    `, SpriteKind.Food)
                NewBurg.setPosition(128, 110)
            }
            if (burg == 22) {
                Health_nonstatus = sprites.create(img`
                    ...........ccccc66666...........
                    ........ccc4444444444666........
                    ......cc444444444bb4444466......
                    .....cb4444bb4444b5b444444b.....
                    ....eb4444b5b44444b44444444b....
                    ...ebb44444b4444444444b444446...
                    ..eb6bb444444444bb444b5b444446..
                    ..e6bb5b44444444b5b444b44bb44e..
                    .e66b4b4444444444b4444444b5b44e.
                    .e6bb444444444444444444444bb44e.
                    eb66b44444bb444444444444444444be
                    eb66bb444b5b44444444bb44444444be
                    fb666b444bb444444444b5b4444444bf
                    fcb666b44444444444444bb444444bcf
                    .fbb6666b44444444444444444444bf.
                    .efbb66666bb4444444444444444bfe.
                    .86fcbb66666bbb44444444444bcc688
                    8772effcbbbbbbbbbbbbbbbbcfc22778
                    87722222cccccccccccccccc22226678
                    f866622222222222222222222276686f
                    fef866677766667777776667777fffef
                    fbff877768f86777777666776fffffbf
                    fbeffeefffeff7766688effeeeefeb6f
                    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
                    f66ddfffffeeeffeffeeeeeffeedb46e
                    .c66ddd4effffffeeeeeffff4ddb46e.
                    .fc6b4dddddddddddddddddddb444ee.
                    ..ff6bb444444444444444444444ee..
                    ....ffbbbb4444444444444444ee....
                    ......ffebbbbbb44444444eee......
                    .........fffffffcccccee.........
                    ................................
                    `, SpriteKind.Secret_food)
                Health_nonstatus.setPosition(128, 110)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.THing_2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TACO, function (sprite, otherSprite) {
    timer.throttle("score tf2", 2000, function () {
        game.showLongText("Scout TF2: \"Yo, whats up?\"", DialogLayout.Bottom)
        timer.after(1000, function () {
            Thing.changeScale(-0.5, ScaleAnchor.Middle)
            Thing.setKind(SpriteKind.tf2)
            Scot_tf2_heatl = statusbars.create(50, 5, StatusBarKind.Scorhealth)
            Scot_tf2_heatl.attachToSprite(Thing, 0, 0)
            Scot_tf2_heatl.max = 150
            Scot_tf2_heatl.value = 150
            Scout_lifer = 0
            tiles.setWallAt(tiles.getTileLocation(8, 1), true)
            tiles.setWallAt(tiles.getTileLocation(7, 1), true)
            timer.after(500, function () {
                Whowouldhaveguessed = sprites.create(img`
                    . . . . . . . . . . . . . . . 3 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Tf2_thing)
                Whowouldhaveguessed.setPosition(100, 100000)
            })
        })
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (Room_ID == 4) {
        if (Worthiness == 0) {
            boss_fire_true = 0
            tiles.setCurrentTilemap(tilemap`level18`)
            Lava_man_IIV = sprites.create(img`
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffff
                `, SpriteKind.Boss_Type_1)
            mySprite.setPosition(100, 180)
            Lava_man_IIV.setPosition(100, 100)
            scene.cameraFollowSprite(Lava_man_IIV)
            game.showLongText("This cube you see before you is the master of this dungeon, he has been the one behind everything you have faced while inside it. There are two ways this could go down; Either you die, or he dies. But beware, he is no normal foe, he is an ancient force of destruction, able to harness a power beyond that of any warrior alive, or dead.", DialogLayout.Bottom)
            game.showLongText("And the bossfight is still pending", DialogLayout.Bottom)
            scene.cameraFollowSprite(mySprite)
            Placeholder_bossfight = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 4 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Left_side)
            Placeholder_bossfight.setPosition(1, 100)
            Lava_man_IIV.setVelocity(40, 0)
            Other_placeholder_bossfight = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 4 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Right_side)
            Other_placeholder_bossfight.setPosition(300, 100)
        } else {
            mySprite.y += 15
            game.showLongText("Thou hast not partaken in a a hamburger yet", DialogLayout.Bottom)
            Room_ID = 4
            Boss_first_fire = 1
        }
    }
})
sprites.onDestroyed(SpriteKind.Tf2_thing, function (sprite) {
    if (Math.percentChance(25)) {
        Thing.setPosition(134, 140)
    }
    if (Math.percentChance(25)) {
        Thing.setPosition(200, 140)
    }
    if (Math.percentChance(25)) {
        Thing.setPosition(60, 140)
    }
    if (Math.percentChance(25)) {
        Thing.setPosition(134, 50)
    }
    if (Math.percentChance(25)) {
        Thing.setPosition(134, 200)
    }
    if (Scout_lifer == 0) {
        timer.after(1500, function () {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 0, -90)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, -90, 0)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 5 . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 0, 90)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . 5 5 5 5 5 5 . . . . 
                . . . . . . . . . 5 5 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Thing, 90, 0)
            projectile2.setKind(SpriteKind.THing_2)
            if (Hard_mode_true == 1) {
                projectile2.follow(mySprite, 15)
                if (Hurt_chaser >= 1) {
                    projectile2.follow(mySprite, 30)
                }
            }
            timer.after(500, function () {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 5 5 5 . . . . . . . . . . . 
                    . . 5 5 5 . . . . . . . . . . . 
                    . . 5 5 5 5 . . . . . . . . . . 
                    . . . . 5 5 5 . . . . . . . . . 
                    . . . . . 5 5 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, -90, -90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 5 5 . . . . . . . . 
                    . . . . . 5 5 5 . . . . . . . . 
                    . . . 5 5 5 5 . . . . . . . . . 
                    . . . 5 5 5 . . . . . . . . . . 
                    . . . 5 5 5 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, -90, 90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 5 5 . . . . . 
                    . . . . . . . . . 5 5 5 . . . . 
                    . . . . . . . . . . 5 5 5 5 . . 
                    . . . . . . . . . . . 5 5 5 . . 
                    . . . . . . . . . . . 5 5 5 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, 90, 90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 5 5 5 . . . 
                    . . . . . . . . . . 5 5 5 . . . 
                    . . . . . . . . . 5 5 5 5 . . . 
                    . . . . . . . . 5 5 5 . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Thing, 90, -90)
                projectile2.setKind(SpriteKind.THing_2)
                if (Hard_mode_true == 1) {
                    projectile2.follow(mySprite, 15)
                    if (Hurt_chaser >= 1) {
                        projectile2.follow(mySprite, 30)
                    }
                }
                timer.after(1500, function () {
                    Whowouldhaveguessed = sprites.create(img`
                        . . . . . . . . . . . . . . . 3 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Tf2_thing)
                    sprites.destroyAllSpritesOfKind(SpriteKind.THing_2, effects.disintegrate, 500)
                })
            })
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(baby_killer, effects.confetti, 500)
    sprites.destroy(sprite)
    tiles.setWallAt(tiles.getTileLocation(0, 7), false)
    tiles.setWallAt(tiles.getTileLocation(7, 0), false)
    if (Hard_mode_true == 1) {
        baby_killer_2.setImage(img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 . . . 
            . . . 2 2 2 . 2 . 2 2 . . 
            . . 2 2 2 . . 2 2 . 2 2 . 
            . . 2 . 2 . . . 2 . . 2 . 
            . . 2 . 2 . . . 2 . . 2 . 
            `)
        Brotherly_love += 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.baby_killer, function (sprite, otherSprite) {
    sprites.destroy(baby_killer_2, effects.confetti, 500)
    sprites.destroy(sprite)
    tiles.setWallAt(tiles.getTileLocation(0, 8), false)
    tiles.setWallAt(tiles.getTileLocation(8, 0), false)
    Puzzle_thing = sprites.create(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, SpriteKind.Puter)
    tiles.placeOnTile(Puzzle_thing, tiles.getTileLocation(7, 13))
    if (Hard_mode_true == 1) {
        Brotherly_love2 += 1
        baby_killer.setImage(img`
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . . . 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 . . . 
            . . . 2 2 2 . 2 . 2 2 . . 
            . . 2 2 2 . . 2 2 . 2 2 . 
            . . 2 . 2 . . . 2 . . 2 . 
            . . 2 . 2 . . . 2 . . 2 . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("Youch", 1500, function () {
        baby_killer_2.x += 10
        info.changeLifeBy(randint(-1, -1))
        if (Brotherly_love2 == 1) {
            baby_killer.setImage(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 2 2 . . . . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                2 2 . . 2 . . . . . 2 . . 2 2 
                2 . 2 2 2 . . . . . 2 2 2 . 2 
                2 . 2 . . . . . . . . . 2 . 2 
                . 2 2 . . . . . . . . . 2 2 . 
                `)
            mySprite.setVelocity(baby_killer_2.vx * 2, baby_killer_2.vy * 2)
            timer.after(300, function () {
                baby_killer.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . . . 2 2 2 . . . . 
                    . . . . 2 2 2 2 2 2 . . . 
                    . . . 2 2 2 . 2 . 2 2 . . 
                    . . 2 2 2 . . 2 2 . 2 2 . 
                    . . 2 . 2 . . . 2 . . 2 . 
                    . . 2 . 2 . . . 2 . . 2 . 
                    `)
                mySprite.setVelocity(0, 0)
            })
        } else {
            baby_killer.setImage(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . 
                . . . . . . f f f . . . . . . 
                . . . . . . f f f . . . . . . 
                . f f f f f f f f f f f f f . 
                f f . . f . . . . . f . . f f 
                f . f f f . . . . . f f f . f 
                f . f . . . . . . . . . f . f 
                . f f . . . . . . . . . f f . 
                `)
            mySprite.setVelocity(baby_killer_2.vx * 2, baby_killer_2.vy * 2)
            timer.after(300, function () {
                baby_killer.setImage(img`
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 
                    . . . . . . f f f . . . . 
                    . . . . . . f f f . . . . 
                    . . . . . . f f f . . . . 
                    . . . . f f f f f f . . . 
                    . . . f f f . f . f f . . 
                    . . f f f . . f f . f f . 
                    . . f . f . . . f . . f . 
                    . . f . f . . . f . . f . 
                    `)
                mySprite.setVelocity(0, 0)
            })
        }
    })
})
let Boss_first_fire = 0
let Other_placeholder_bossfight: Sprite = null
let Placeholder_bossfight: Sprite = null
let textSprite3: TextSprite = null
let NewBurg: Sprite = null
let Lava_man_IIV: Sprite = null
let projectile3: Sprite = null
let Quick_time_event = 0
let Whowouldhaveguessed: Sprite = null
let Hurt_chaser = 0
let projectile2: Sprite = null
let Brotherly_love2 = 0
let Brotherly_love = 0
let Theplaceholderreturns: Sprite = null
let Jump_er = 0
let baby_killer_2: Sprite = null
let baby_killer: Sprite = null
let Health_nonstatus: Sprite = null
let Thingy: Sprite = null
let boss_fire_true = 0
let Heart_4: Sprite = null
let Heart_3: Sprite = null
let Heart_2: Sprite = null
let Heart_1: Sprite = null
let Scout_lifer = 0
let Target_room_door_thingy_2 = 0
let projectile: Sprite = null
let Puzzle_answer = 0
let Target_room_door_thingy = 0
let Target4: Sprite = null
let Target3: Sprite = null
let Target2: Sprite = null
let Target1: Sprite = null
let Thing: Sprite = null
let Puzzle_thing: Sprite = null
let Walking_direction = 0
let Scot_tf2_heatl: StatusBarSprite = null
let Scatteredgug: Sprite = null
let Hardmode_ask = ""
let statusbar: StatusBarSprite = null
let The_killer: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let mySprite: Sprite = null
let Room_ID = 0
let Hard_mode_true = 0
let Target_life = 0
let Worthiness = 0
let burg = 0
let Item_2 = 0
let Have_scatter = 0
let puzzle_solved = 0
let killer_alive = 0
let Pc_working = 0
Pc_working = 1
killer_alive = 0
puzzle_solved = 0
Have_scatter = 0
Item_2 = 0
burg = 0
Worthiness = 0
Target_life = 1
Hard_mode_true = 0
Room_ID = 0
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....fffffffff.......
    ....f.......f.......
    ....f.f...f.f.......
    ....f.......f.......
    ....f...f...f.......
    ....f.......f.......
    ....f...f...f.......
    ....fffffffff.......
    ........f...........
    ........f...........
    .......fff..........
    ......f.f.f.........
    .....f..f..f........
    ........f...........
    ........f...........
    .......f.f..........
    ......f...f.........
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(158, 115)
controller.moveSprite(mySprite, 60, 60)
scene.cameraFollowSprite(mySprite)
timer.after(500, function () {
    textSprite = textsprite.create("Hey! you're finally awake.", 1, 15)
    textSprite.setPosition(160, 90)
    timer.after(2500, function () {
        textSprite.setText("Quick rundown of how this")
        textSprite2 = textsprite.create("works.", 1, 15)
        textSprite2.setPosition(160, 100)
        timer.after(2500, function () {
            textSprite.setText("Arrow keys to move")
            textSprite2.setText("Z key to shoot.")
            timer.after(2500, function () {
                textSprite.setText("And last of all")
                textSprite2.setText("HE IS HERE")
                timer.after(4000, function () {
                    sprites.destroy(textSprite)
                    sprites.destroy(textSprite2)
                    The_killer = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . f f f f . 
                        . . . . . . . . . . f f . . f f 
                        . . . . . . . . . . f f . f . f 
                        . . . . . . . . . . . f . . f f 
                        . . . . f f f f f f f f f f f . 
                        . . . . f . f . . f . f f f . . 
                        . . f f . f f . . f f . . f . . 
                        . . f . . f . . . . f . . f . . 
                        . f . . f . . . . . f . . . f . 
                        . f . . f . . . . . f f . . . f 
                        . f . . f . . . . . . f . . . f 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Killer)
                    killer_alive += 1
                    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                    statusbar.value = 100
                    statusbar.setLabel("Creature", 15)
                    statusbar.attachToSprite(The_killer)
                    The_killer.setPosition(14, 15)
                    The_killer.follow(mySprite, 35)
                    Hardmode_ask = game.askForString("Hardmode? Y/N")
                    if (Hardmode_ask == "y" || Hardmode_ask == "yes") {
                        info.setLife(1)
                        Hard_mode_true = 1
                        game.splash("Have fun")
                    } else {
                        game.splash("Ok")
                    }
                })
            })
        })
    })
})
game.onUpdateInterval(500, function () {
    if (killer_alive == 1) {
        if (The_killer.vx > 0) {
            The_killer.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . f f f f . 
                . . . . . . . . . . f f . . f f 
                . . . . . . . . . . f f . f . f 
                . . . . . . . . . . . f . . f f 
                . . . . f f f f f f f f f f f . 
                . . . . f . f . . f . f f f . . 
                . . f f . f f . . f f . . f . . 
                . . f . . f . . . . f . . f . . 
                . f . . f . . . . . f . . . f . 
                . f . . f . . . . . f f . . . f 
                . f . . f . . . . . . f . . . f 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            The_killer.setImage(img`
                . . . . . . . . . . . . . . . . 
                . f f f f . . . . . . . . . . . 
                f f . . f f . . . . . . . . . . 
                f . f . f f . . . . . . . . . . 
                f f . . f . . . . . . . . . . . 
                . f f f f f f f f f f f . . . . 
                . . f f f . f . . f . f . . . . 
                . . f . . f f . . f f . f f . . 
                . . f . . f . . . . f . . f . . 
                . f . . . f . . . . . f . . f . 
                f . . . f f . . . . . f . . f . 
                f . . . f . . . . . . f . . f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
})
