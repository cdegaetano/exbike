namespace SpriteKind {
    export const Moto = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(frontWheel)
    controller.moveSprite(mySprite2)
})
let mySprite2: Sprite = null
let frontWheel: Sprite = null
scene.setBackgroundColor(13)
frontWheel = sprites.create(img`
    . . . f f f . . 
    . . f f f f f . 
    . f . . . . f . 
    f f . . . . f f 
    f f . . f . f f 
    f f . . . . f f 
    . f . . . . f . 
    . . f f f f f . 
    `, SpriteKind.Moto)
let rearWheel = sprites.create(img`
    . . . f f f . . 
    . . f f f f f . 
    . f . . . . . f 
    f f . . f . . f 
    f f . f f f . f 
    f f . . f . . f 
    . f . . . . . f 
    . . f f f f f . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 1 2 2 . . . . . . 
    . . . . 2 2 f f 1 1 1 . . . . . 
    . . . . 2 2 1 f f f f . . . . . 
    . . . . f 1 2 1 1 1 1 . . . . . 
    . . . . f 1 2 2 2 2 2 2 . . . . 
    . . . . f f 1 1 1 . 2 2 2 f f . 
    1 1 1 1 2 f 1 1 1 . . 2 2 2 2 . 
    2 2 2 1 2 1 1 1 2 1 . . 2 2 2 . 
    . . . 2 2 1 1 2 2 2 1 . . 2 . . 
    . . . 2 2 2 2 1 1 2 2 2 2 2 . . 
    . . . . . . 2 1 1 1 2 . . 2 . . 
    . . . . . . 2 1 1 1 2 . . 2 . . 
    . . . . 2 2 2 1 1 1 2 . . 2 2 . 
    . . . . . . 2 2 1 2 . . . . 2 . 
    . . . . . . . 2 1 1 1 . . . . . 
    `, SpriteKind.Moto)
frontWheel.setPosition(86, 67)
rearWheel.setPosition(72, 67)
