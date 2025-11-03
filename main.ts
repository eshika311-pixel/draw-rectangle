function drawRect (width: number, height: number) {
    RectanglePicture = image.create(width, height)
    RectanglePicture.fill(3)
    RectanglePicture.drawRect(0, 0, width, height, 10)
    myRectangle = sprites.create(RectanglePicture, SpriteKind.Player)
}
let myRectangle: Sprite = null
let RectanglePicture: Image = null
scene.setBackgroundColor(1)
drawRect(100, 100)
