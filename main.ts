namespace SpriteKind {
    export const Killer = SpriteKind.create()
    export const baby_killer = SpriteKind.create()
    export const Ghost_block = SpriteKind.create()
    export const Jumpy_thing = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 2
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
statusbars.onZero(StatusBarKind.Health, function (status) {
    baby_killer = sprites.createProjectileFromSprite(img`
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
        `, The_killer, -47, 0)
    baby_killer_2 = sprites.createProjectileFromSprite(img`
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
        `, The_killer, 47, 0)
    sprites.destroy(The_killer)
    timer.after(300, function () {
        baby_killer.setKind(SpriteKind.Enemy)
        baby_killer_2.setKind(SpriteKind.baby_killer)
        baby_killer_2.follow(mySprite, 20)
        baby_killer.follow(mySprite, 20)
        Jump_er = 0
        Jump_er2 = 0
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
    if (Jump_er2 == 0) {
        baby_killer.follow(mySprite, 90)
        baby_killer_2.follow(mySprite, 90)
        timer.after(500, function () {
            baby_killer.follow(mySprite, 20)
            baby_killer_2.follow(mySprite, 20)
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
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Walking_direction = 3
})
info.onLifeZero(function () {
    sprites.destroy(mySprite)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedWest, function (sprite, location) {
    if (Room_ID == 1) {
        tiles.setCurrentTilemap(tilemap`level12`)
        Room_ID = 3
    }
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(baby_killer, effects.confetti, 2000)
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(0, 7), false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.baby_killer, function (sprite, otherSprite) {
    sprites.destroy(baby_killer_2, effects.confetti, 2000)
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(0, 8), false)
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
let Jump_er2 = 0
let Jump_er = 0
let baby_killer_2: Sprite = null
let baby_killer: Sprite = null
let projectile: Sprite = null
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
