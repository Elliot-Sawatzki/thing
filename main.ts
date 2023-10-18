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
        tiles.setWallAt(tiles.getTileLocation(7, 15), false)
        tiles.setWallAt(tiles.getTileLocation(8, 15), false)
        Item_2 += -1
        Room_ID = 0
        mySprite.setPosition(134, 220)
        if (Item_2 == 0) {
            sprites.destroy(Thing)
        }
    } else {
        if (Room_ID == 0) {
            tiles.setCurrentTilemap(tilemap`level16`)
            Room_ID = 4
            mySprite.setPosition(125, 210)
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
    if (Room_ID == 4) {
        mySprite.setPosition(134, 35)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.setWallAt(tiles.getTileLocation(0, 7), false)
        tiles.setWallAt(tiles.getTileLocation(8, 15), false)
        tiles.setWallAt(tiles.getTileLocation(7, 15), false)
        tiles.setWallAt(tiles.getTileLocation(8, 0), false)
        tiles.setWallAt(tiles.getTileLocation(7, 0), false)
        tiles.setWallAt(tiles.getTileLocation(0, 8), false)
        Room_ID = 0
        if (Target_room_door_thingy == 0) {
            sprites.destroy(Target1)
            sprites.destroy(Target2)
            sprites.destroy(Target3)
            sprites.destroy(Target4)
        }
    }
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
        timer.after(300, function () {
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
        tiles.setWallAt(tiles.getTileLocation(7, 15), false)
        tiles.setWallAt(tiles.getTileLocation(8, 15), false)
        Room_ID = 0
    }
    if (Room_ID == 3) {
        tiles.setCurrentTilemap(tilemap`level2`)
        Room_ID = 1
        mySprite.setPosition(25, 95)
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
        })
    })
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
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart_1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
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
        if (baby_killer.overlapsWith(baby_killer_2)) {
            baby_killer.follow(mySprite, 5)
            baby_killer_2.follow(mySprite, 10)
        } else {
            baby_killer.follow(mySprite, 10)
            baby_killer_2.follow(mySprite, 10)
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
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.showLongText("Eatin a burger with no honey mustard", DialogLayout.Bottom)
    info.changeLifeBy(5)
    sprites.destroy(NewBurg)
    Worthiness = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.baby_killer, function (sprite, otherSprite) {
    timer.throttle("Youch", 1500, function () {
        mySprite.x += 10
        info.changeLifeBy(randint(-1, -1))
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
        })
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
        if (Worthiness == 1) {
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
        } else {
            mySprite.y += 15
            game.showLongText("Thou hast not partaken in a a hamburger yet", DialogLayout.Bottom)
            Room_ID = 4
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
                })
            })
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(baby_killer, effects.confetti, 2000)
    sprites.destroy(sprite)
    tiles.setWallAt(tiles.getTileLocation(0, 7), false)
    tiles.setWallAt(tiles.getTileLocation(7, 0), false)
    tiles.setWallAt(tiles.getTileLocation(7, 15), false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.baby_killer, function (sprite, otherSprite) {
    sprites.destroy(baby_killer_2, effects.confetti, 2000)
    sprites.destroy(sprite)
    tiles.setWallAt(tiles.getTileLocation(0, 8), false)
    tiles.setWallAt(tiles.getTileLocation(8, 0), false)
    tiles.setWallAt(tiles.getTileLocation(8, 15), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (Room_ID == 0) {
        Item_2 += 1
        mySprite.setPosition(134, 40)
        Room_ID = 5
        tiles.setCurrentTilemap(tilemap`level19`)
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
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("Youch", 1500, function () {
        baby_killer_2.x += 10
        info.changeLifeBy(randint(-1, -1))
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
            info.changeLifeBy(randint(-1, -1))
        })
    })
})
let Lava_man_IIV: Sprite = null
let NewBurg: Sprite = null
let Whowouldhaveguessed: Sprite = null
let projectile2: Sprite = null
let Theplaceholderreturns: Sprite = null
let Jump_er = 0
let baby_killer_2: Sprite = null
let baby_killer: Sprite = null
let Health_nonstatus: Sprite = null
let Heart_4: Sprite = null
let Heart_3: Sprite = null
let Heart_2: Sprite = null
let Heart_1: Sprite = null
let Scout_lifer = 0
let Target_room_door_thingy_2 = 0
let projectile: Sprite = null
let Target_room_door_thingy = 0
let Target4: Sprite = null
let Target3: Sprite = null
let Target2: Sprite = null
let Target1: Sprite = null
let Thing: Sprite = null
let Walking_direction = 0
let Scot_tf2_heatl: StatusBarSprite = null
let Scatteredgug: Sprite = null
let statusbar: StatusBarSprite = null
let The_killer: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let mySprite: Sprite = null
let Room_ID = 0
let Target_life = 0
let Worthiness = 0
let burg = 0
let Item_2 = 0
let Have_scatter = 0
Have_scatter = 0
Item_2 = 0
burg = 0
Worthiness = 0
Target_life = 1
Room_ID = 0
info.setLife(500)
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
                    game.showLongText("You also have extra health to make it easier ", DialogLayout.Bottom)
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
                    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                    statusbar.value = 100
                    statusbar.setLabel("Creature", 15)
                    statusbar.attachToSprite(The_killer)
                    The_killer.setPosition(14, 15)
                    The_killer.follow(mySprite, 35)
                })
            })
        })
    })
})
