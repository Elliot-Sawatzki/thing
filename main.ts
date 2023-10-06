namespace SpriteKind {
    export const Killer = SpriteKind.create()
    export const baby_killer = SpriteKind.create()
    export const Ghost_block = SpriteKind.create()
    export const Jumpy_thing = SpriteKind.create()
    export const Target1 = SpriteKind.create()
    export const Target2 = SpriteKind.create()
    export const Target3 = SpriteKind.create()
    export const Target4 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (Room_ID == 0) {
        tiles.setCurrentTilemap(tilemap`level16`)
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
        Room_ID = 4
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
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, 90, 0)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, 0, 90)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, -90, 0)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, 0, -90)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, 90, -90)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, -90, 90)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, 90, 90)
    projectile = sprites.createProjectileFromSprite(img`
        f f f f f 
        f 8 9 9 f 
        f 8 6 9 f 
        f 8 8 8 f 
        f f f f f 
        `, mySprite, -90, -90)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Killer, function (sprite, otherSprite) {
    sprites.destroy(projectile)
    statusbar.value += -50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Target1, function (sprite, otherSprite) {
    sprites.destroy(Target1, effects.disintegrate, 400)
    Target_room_door_thingy += 1
    timer.after(200, function () {
        if (Target_room_door_thingy == Target_room_door_thingy_2) {
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
                tiles.setTileAt(tiles.getTileLocation(7, 0), sprites.dungeon.doorOpenNorth)
                tiles.setTileAt(tiles.getTileLocation(8, 0), sprites.dungeon.doorOpenNorth)
                timer.after(150, function () {
                    sprites.destroy(Target1)
                    sprites.destroy(Target2)
                    sprites.destroy(Target3)
                    sprites.destroy(Target4)
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
        tiles.setWallAt(tiles.getTileLocation(0, 8), false)
        Room_ID = 0
    }
    if (Room_ID == 3) {
        tiles.setCurrentTilemap(tilemap`level2`)
        Room_ID = 1
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
sprites.onDestroyed(SpriteKind.Jumpy_thing, function (sprite) {
    if (baby_killer.overlapsWith(baby_killer_2)) {
        baby_killer_2.follow(mySprite, 90)
        baby_killer.follow(mySprite, 100)
    } else {
        baby_killer.follow(mySprite, 100)
        baby_killer_2.follow(mySprite, 100)
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 3
})
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    game.gameOver(false)
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
        tiles.setCurrentTilemap(tilemap`level12`)
        Room_ID = 3
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(baby_killer, effects.confetti, 2000)
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(0, 7), false)
    tiles.setWallAt(tiles.getTileLocation(7, 0), false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.baby_killer, function (sprite, otherSprite) {
    sprites.destroy(baby_killer_2, effects.confetti, 2000)
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(0, 8), false)
    tiles.setWallAt(tiles.getTileLocation(8, 0), false)
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
let Theplaceholderreturns: Sprite = null
let Jump_er = 0
let baby_killer_2: Sprite = null
let baby_killer: Sprite = null
let Target_room_door_thingy_2 = 0
let Target_room_door_thingy = 0
let projectile: Sprite = null
let Target4: Sprite = null
let Target3: Sprite = null
let Target2: Sprite = null
let Target1: Sprite = null
let Walking_direction = 0
let statusbar: StatusBarSprite = null
let The_killer: Sprite = null
let mySprite: Sprite = null
let Room_ID = 0
Room_ID = 0
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(3)
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
timer.after(4000, function () {
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
