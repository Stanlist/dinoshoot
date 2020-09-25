enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Blaster,
    Sword
}
namespace SpriteKind {
    export const Sword = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (bullet, enemy) {
    enemy.destroy()
    bullet.destroy()
    info.changeScoreBy(1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wepSelect == 0) {
        wepSelect = 1
    } else {
        wepSelect = 0
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (wepSelect == 0) {
        pewSpeed = dino.vx + 100
        projectile = sprites.createProjectileFromSprite(img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 1 b 1 1 4 d 6 
            c 1 b b 4 4 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `, dino, pewSpeed, 0)
        animation.setAction(dino, ActionKind.Blaster)
    } else {
        animation.setAction(dino, ActionKind.Sword)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -200
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player2, enemy) {
    info.changeLifeBy(-1)
    enemy.destroy()
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let pewSpeed = 0
let wepSelect = 0
let dino: Sprite = null
info.setLife(3)
scene.setBackgroundImage(image.ofBuffer(hex`e4a07800ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccacacccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaacaccacacacacacaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaacaaacaaacaacacacacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaacaaaacacccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacacccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacaccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccccccccccccccccccccaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccaaaaaaaaaaaaaaaaaaaaaaadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccaaaaaaaaaaaaaaaa33aaaaaaaac8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccaaaaaaaaaaaaaaaaaaaaaaaaaacaaaaaaacaacacaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccaaaaaaaaaaaaaaaaaaaaaaaaaabaaa8aacaaacacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaa3aa3aaaaaaa8aaa8aaaaa3a3caaa3acaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaadaadaaaaaa8aca3aaaaaa3aa3aa3aaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccaaaaaaaaaaaaa3aaaaaa8da9ab3a3aa3aaaaaaaaaaaacaaaaacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaada9daaaaaaabaaaa3333aaa3d3aaacaaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaabaaaaa1a993aaad1a3a133aaaa3aa3a3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccaaaaaaaaaa3aaa3adaaadada313aa3aaad1aa3aa3a33aaaaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaadaaaaaa8daa93aaa3a33a3d333d3aaa3a33d33aaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaa3aaaa3bad11dd1dd1933d3a31dd11d11a3daa3aaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaadaaaaa8ab3aa31133a1d1da13133131d31aaaaaac3aacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccaaaaaaaa3ad3aaa3aadada19d3aad3313111331aa3a3da333aaaaaacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaa3aadaaa3aaa1ad1a13d31111111311da31a31a3a3aa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaa3aadaaaaaa331d1911b113111311113331aa133a33a3aaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaa3aadaab3aad1d111111d1111111311331111dada33aaaaaacaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaa3aa3dad33d1313dd11111d1111d111d133313333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaacaa33a3a3a1d11111111111111111111dd3333a333aaa3caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaccaa333313d11111d11111111111111d1111adadaaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaaaa3aa3333311111d1111111111111111d13d131133aaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaca33ad33131d1131111d11111111111111333dd1ad3b33a3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaac3a3a11111111111111111111111131d1113dd3abaacaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaacaa3dab11d1111111111d11111111111db1313333ddc3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaacaaa3aad13d3d1111111111111111111113111313daaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaa3a3a3aaa33111d1111111111111111d131d3a13333dacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaaca3aaa3aaa33111d111111111111111111d1d3a333333bcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaa3caa33331d11dd1111111111111111111dd133333333c3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaaaaac33d3a31adddd1111111111111111311113ad33aaaaa3ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccaaaaaaaaaaaaaaa3addad1dd1111111111111111111d313133a33333caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaaaca333d11d1311d11111111111111d311d13a33aaaaac3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaaaa3a1a33a13111a1111131111111131111a3da3aaa333accacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaacaaaa33a11a3da31111111111111111d113a3aaaaaaaa8caaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaadddd99aad1ad3311dd1d11131111113d1a31a133a3acaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaaaaaaaaaaaadda131dd1311a1d1111d111311131aa13adaaaaaaacaacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccaaaaaaaaaaaaaa93d1aad11131a1131d1131311333311133a3aacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaa1a99aa1aad31dda333111dd133d3a133aaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccaaaaaaaaaaaaaaadaaaa9ad1a31311a113aa313d111331aac3a3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccaaaaaaaaaadaddadaaaa1aaaaaa11d111a3a1a3aaaa333aaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaa8a3aaaaa33a13111a1aaaa1adda33cacacaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccaaaaaaaaaaaaaaaaaaaaa83aaaa3a31a9a19aaadad31aacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaac3aa3aaa1aa9a1a3da3aa3accaccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccaccaaaaaaaaaaaaaadaaaaacaaaaa3aaaa313a93aa3aaaaccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaadaaaaacaccac3aa3aa1aada1caaccaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccaaaaaaaaaaaadaadaaaaaaaaaaaaaaaa9da1cacaaaacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccaaaaaaaaaaaadaadaaaaaaaacaacaaaadaaacaaacacaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaadaadaaaaaaaaaaaaacaabaa8caaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccaaaaaaaaaaaaaadaaaaaaaaaaaaaaaaca3aaaaccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaa8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccacacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacacacacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaaaacaaaacacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacacacaccaaaaaaaaaaaaaaaaaacaacccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacacaaaacaaaaaaaacacaccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacacacacacaccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc`))
tiles.setTilemap(tilemap`level_0`)
dino = sprites.create(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111111f......
    99....1111111999.....
    999..9d1111111f9.....
    9999999d111111.......
    9999999d111111.......
    .9999999d11111.......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.99..........
    .....11...1..........
    .....e....e..........
    .....ee...ee.........
    `, SpriteKind.Player)
dino.ay = 500
dino.vx = 40
wepSelect = 0
let anim = animation.createAnimation(ActionKind.Walking, 50)
anim.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111111f......
    99....1111111999.....
    999..9d1111111f9.....
    9999999d111111.......
    9999999d111111.......
    .9999999d11111.......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.99..........
    .....11...1..........
    .....e....e..........
    .....ee...ee.........
    `)
anim.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .9.......9999999.....
    .9.......9999999999..
    99......11111f2......
    999....1111111f......
    9999..1111111999.....
    .99999d1111111f9.....
    .999999d111111.......
    ..99999d111111.......
    ...99999d11111.......
    ...999999d111d.......
    ....999999ddd........
    ....9999999..........
    .....999.91..........
    .....11...1ee........
    .....e...............
    .....ee..............
    `)
anim.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111111f......
    99....1111111999.....
    999..9d1111111f9.....
    9999999d111111.......
    9999999d111111.......
    .9999999d11111.......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.99..........
    .....11...1..........
    .....e....e..........
    .....ee...ee.........
    `)
anim.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111111f......
    99....1111111999.....
    999..9d1111111f9.....
    9999999d111111.......
    9999999d111111.......
    .9999999d11111.......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....199.99..........
    .....1ee..1..........
    ..........e..........
    ..........ee.........
    `)
animation.attachAnimation(dino, anim)
animation.setAction(dino, ActionKind.Walking)
let anim2 = animation.createAnimation(ActionKind.Blaster, 50)
anim2.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111bbccc22cc.
    99....11111bbccc22c8.
    999..9d11111bcc9bccc.
    9999999d1111bcc9b....
    9999999d11111cc9.....
    .9999999d11111c......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.99..........
    .....11...1..........
    .....e....e..........
    .....ee...ee.........
    `)
anim2.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111bbccc22cc.
    99....11111bbccc22c8.
    999..9d11111bcc9bccc.
    9999999d1111bcc9b....
    9999999d11111cc9.....
    .9999999d11111c......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.91..........
    .....11...1ee........
    .....e...............
    .....ee..............
    `)
anim2.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .........9999999.....
    .........9999999999..
    9.......11111f2......
    9......1111bbccc22cc.
    99....11111bbccc22c8.
    999..9d11111bcc9bccc.
    9999999d1111bcc9b....
    9999999d11111cc9.....
    .9999999d11111c......
    ..9999999d111d.......
    ...9999999ddd........
    ....9999999..........
    .....999.99..........
    .....11...1..........
    .....e....e..........
    .....ee...ee.........
    `)
anim2.addAnimationFrame(img`
    ...........ff........
    ..........ffff.......
    ..........9999999999.
    .........99f999999999
    .........999999999999
    .........999999999999
    .........999999999999
    .9.......9999999.....
    .9.......9999999999..
    999.....11111f2......
    999....1111bbccc22cc.
    9999..11111bbccc22c8.
    .99999d11111bcc9bccc.
    .999999d1111bcc9b....
    .999999d11111cc9.....
    ..999999d11111c......
    ...999999d111d.......
    ....999999ddd........
    ....9999999..........
    .....199.99..........
    .....1ee..1..........
    ..........e..........
    ..........ee.........
    `)
animation.attachAnimation(dino, anim2)
let anim3 = animation.createAnimation(ActionKind.Sword, 50)
anim3.addAnimationFrame(img`
    ...............6.........
    ..............161........
    ..............161........
    ..............666........
    ..............666........
    ..............666........
    ..............166........
    ...........ff.666........
    ..........ffff666........
    ..........9999666999.....
    .........992996619999....
    .........999996669999....
    .........999996669999....
    .........999991669999....
    .........99999666........
    .........9999966699......
    9.......11111f666........
    9......111111ccccc.......
    99....11111119ccc........
    999..9d1111111999........
    9999999d111111bbb........
    9999999d111111.b.........
    .9999999d11111...........
    ..9999999d111d...........
    ...9999999ddd............
    ....9999999..............
    .....999.99..............
    .....11...1..............
    .....e....e..............
    .....ee...ee.............
    `)
anim3.addAnimationFrame(img`
    ..............................
    ..............................
    ........................11....
    .........................11...
    ...........................11.
    .............................1
    .....................111....66
    ...........ff..........11..666
    ..........ffff.....1......666.
    ..........99999999911....666..
    .........9929999999991..666...
    .........999999999999..666....
    .........999999999999.666.....
    .........999999999999666......
    .........99999......666.......
    .........999999cc99666........
    9.......11111f2ccc666.........
    9......1111111f.ccc6..........
    99....1111111999bccc..........
    999..9d1111111199bccc.........
    9999999d111111bb99.cc.........
    9999999d1111111b......1.......
    .9999999d11111....1111........
    ..9999999d111d................
    ...9999999ddd.................
    ....9999999...................
    .....999.91...................
    .....11...1ee.................
    .....e........................
    .....ee.......................
    `)
anim3.addAnimationFrame(img`
    ...........ff.....................
    ..........ffff....................
    ..........9999999999..............
    .........992999999999.............
    .........999999999999.............
    .........999999999999.1...........
    .........999999999999..1.....1..1.
    .........9999999.......1.....1..1.
    .........9999999999....1.....1..11
    9.......11111f2........1.....1...1
    9......1111111f..c.....1.1....1..1
    99....1111111999cc616661166666611.
    999..9d111111bb9cc6666616666666666
    9999999d111111bbcc666666661666611.
    9999999d111111...c................
    .9999999d11111.11.....1...........
    ..9999999d111d..1111..1...........
    ...9999999ddd.....................
    ....9999999.......................
    .....999.99.......................
    .....11...1.......................
    .....e....e.......................
    .....ee...ee......................
    `)
anim3.addAnimationFrame(img`
    ...........ff.................
    ..........ffff................
    ..........9999999999..........
    .........99f999999999.........
    .........999999999999.........
    .........999999999999.........
    .........999999999999.........
    .........9999999..............
    .........9999999999...........
    9.......11111f2..cc...........
    9......1111111bbccc..1..1.....
    99....11111119bbcc..11.1......
    999..9d1111111ccc6.1...1......
    9999999d11111ccc666...11...1..
    9999999d11111cc..166..1....1..
    .9999999d11111....666.....11..
    ..9999999d111d.1...666...1..1.
    ...9999999ddd..1....616.....1.
    ....9999999.....1....666...1..
    .....199.99.....1.....666.....
    .....1ee..1............666....
    ..........e.............666...
    ..........ee.........11..61...
    `)
animation.attachAnimation(dino, anim3)
game.onUpdate(function () {
    scene.centerCameraAt(dino.x + scene.screenWidth() / 2 - 10, 0)
    myEnemy.follow(dino, 50)
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
    myEnemy.x = dino.x + 210
    myEnemy.y = randint(40, 85)
})
game.onUpdateInterval(1000, function () {
    animation.setAction(dino, ActionKind.Walking)
})
