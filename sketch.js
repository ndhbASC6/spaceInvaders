let ship = {
    shipX: 500,
    shipY: 1000 - 75,
}
let player = Object.create(ship);
let alien = {
    alienX: 50,
    alienY: 50,
}
let enemy = Object.create(alien);
function setup() {
    createCanvas(1000, 1000);
    background(0);
    frameRate(45);
}
let bullet = {
    bulletX: player.shipX,
    bulletY: player.shipY
}
let shot = Object.create(bullet);
function draw(){
    if(keyIsDown(LEFT_ARROW)) {
        player.shipX -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        player.shipX += 5;
    }
    background(0);
    enemy.alienX += 2;
    ellipse(enemy.alienX, enemy.alienY, 10, 10);
    rect(player.shipX, player.shipY, 75, 50);
    if(keyIsDown(13)) {
        createBullet();
    }
}
function keyPressed() {
}
function keyReleased() {
}
function createBullet() {
    // let shot = Object.create(bullet);
    for(let i = 0; i < 3; i++) {
        rect(shot.bulletX, shot.bulletY + (i * 200), 10, 10);
    }
    moveBullet();
}
function moveBullet() {
    // let shot = Object.create(bullet);
    shot.bulletY -= 20;
    if(shot.bulletY <= 0) {
        shot.bulletY = player.shipY;
        shot.bulletX = player.shipX;
    }
}