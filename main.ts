controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(assets.image`mouse2-up`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(img`
        ..fff.......fff..
        .fbbbf.....fbbbf.
        fbb3bbf...fbb3bbf
        fb333bf...fb333bf
        fb333fffffff333bf
        fb33fbbbbbbbf33bf
        .fffbbbbbbbbbfff.
        ..fbbbbbbbbbbbf..
        ..fbbbbbbbbbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbfbbbfbbbf..
        ..fbbbbbfbbbbbf..
        ...fbbbfffbbbf...
        ..fffbbbbbbbfff..
        .fbbfffffffffbbf.
        .fbbf4444444fbbf.
        ..ffffffffffffff.
        ...fbbbbfbbbbf...
        ...fbbbbfbbbbf...
        ..fffffffffffff..
        .f1ddddddddddd4f.
        .fd444444444442f.
        .fd444444444442f.
        .fd44fff44f4442f.
        .fd44f4f4ff4442f.
        .fd44fff44f4442f.
        .fd44f4444f4442f.
        .fd44f444fff442f.
        .fd444444444442f.
        .fd444444444442f.
        .f4222222222222f.
        ..fffffffffffff..
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse2: Sprite = null
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)
simplified.wrap(function () {
    myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)
