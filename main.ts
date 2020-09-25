controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pewSpeed = dino.vx + 100
    projectile = sprites.createProjectileFromSprite(img`
        . . 6 6 6 6 . . 
        . 6 d 4 4 4 6 . 
        6 1 b 1 1 4 d 6 
        c 1 b b 4 4 1 c 
        . c b b b d c . 
        . . c c c c . . 
        `, dino, pewSpeed, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.vx = 35
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.vx = 70
})
info.onLifeZero(function () {
    game.over(false)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let pewSpeed = 0
let dino: Sprite = null
info.setLife(3)
scene.setBackgroundColor(5)
tiles.setTilemap(tilemap`level_0`)
dino = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
dino.ay = 500
game.onUpdate(function () {
    scene.centerCameraAt(dino.x + scene.screenWidth() / 2 - 10, 0)
    myEnemy.follow(dino)
})
game.onUpdateInterval(5000, function () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    myEnemy.x = scene.screenWidth()
    myEnemy.y = 0
})
