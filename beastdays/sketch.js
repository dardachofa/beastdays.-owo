var PLAY = 1;
var END = 0;
var gameState = PLAY;

var merlin;
var aguita;
var amanojaku;
var ballena_fantasma;
var basan;
var bola_de_fuego;
var dragon;
var esfinge;
var fenix;
var fondo;
var grifo;
var hidra;
var manticora;
var medusa;
var ogro;
var pico_de_nieve;
var plataforma_flotante;
var poder_semillas;
var quilin;
var quimera;
var silfide;
var sirena;
var tierra_completa;
var unicornio;
var zorro_de_muchas_colas;


function preload(){
    fondo = loadImage("./imagenes/fondo.png");
    console.log(fondo);
    merlin = loadImage("./imagenes/merlin.png");
    aguita = loadImage("./imagenes/aguita.png");
    amanojaku = loadImage("./imagenes/amanojaku.png");
    ballena_fantasma = loadImage("./imagenes/ballena_fantasma.png");
    basan = loadImage("./imagenes/basan.png");
    bola_de_fuego = loadImage("./imagenes/bola_de_fuego.png");
    dragon = loadImage("./imagenes/dragon.png");
    esfinge = loadImage("./imagenes/esfinge.png");
    fenix = loadImage("./imagenes/fenix.png");
    grifo = loadImage("./imagenes/grifo.png");
    hidra = loadImage("./imagenes/hidra.png");
    manticora = loadImage("./imagenes/manticora.png");
    medusa = loadImage("./imagenes/medusa.png");
    ogro = loadImage("./imagenes/ogro.png");
    pico_de_nieve = loadImage("./imagenes/pico_de_nieve.png");
    plataforma_flotante = loadImage("./imagenes/plataforma_flotante.png");
    poder_semillas = loadImage("./imagenes/poder_semmillas.png");
    quilin = loadImage("./imagenes/quilin.png");
    quimera = loadImage("./imagenes/quimera.png");
    silfide = loadImage("./imagenes/silfide.png");
    sirena = loadImage("./imagenes/sirena.png");
    tierra_completa = loadImage("./imagenes/tierra_completa.png");
    unicornio = loadImage("./imagenes/unicornio.png");
    zorro_de_muchas_colas = loadImage("./imagenes/zorro_de_muchas_colas.png");
}

function setup(){
canvas = createCanvas(1200,400);
merlin = createSprite(20,20,20,20);
merlin.scale(25);
aguita = createSprite(20,20,20,20);
aguita.scale(25);
amanojaku = createSprite(20,20,20,20);
amanojaku.scale(25);
ballena_fantasma = createSprite(20,20,20,20);
ballena_fantasma.scale(25);
basan = createSprite(20,20,20,20);
basan.scale(25);
bola_de_fuego = createSprite(20,20,20,20);
bola_de_fuego.scale(25);
dragon = createSprite(20,20,20,20);
dragon.scale(25);
esfinge = createSprite(20,20,20,20);
esfinge.scale(25);
fenix = createSprite(20,20,20,20);
fenix.scale(25);
grifo = createSprite(20,20,20,20);
grifo.scale(25);
hidra = createSprite(20,20,20,20);
hidra.scale(25);
manticora = createSprite(20,20,20,20);
manticora.scale(25);
medusa = createSprite(20,20,20,20);
medusa.scale(25);
ogro = createSprite(20,20,20,20);
ogro.scale(25);
pico_de_nieve = createSprite(20,20,20,20);
pico_de_nieve.scale(25);
plataforma_flotante = createSprite(20,20,20,20);
plataforma_flotante.scale(25);
poder_semillas = createSprite(20,20,20,20);
poder_semillas.scale(25);
quilin = createSprite(20,20,20,20);
quilin.scale(25);
quimera = createSprite(20,20,20,20);
quimera.scale(25)
silfide = createSprite(20,20,20,20);
silfide.scale(25);
sirena = createSprite(20,20,20,20);
sirena.scale(25);
tierra_completa = createSprite(20,20,20,20);
tierra_completa.scale(25);
unicornio = createSprite(20,20,20,20);
unicornio.scale(25);
zorro_de_muchas_colas = createSprite(20,20,20,20);
zorro_de_muchas_colas.scale(25);

}

function draw(){
background(fondo);


drawSprites();
}

function display(){

merlin.display;
aguita.display;
amanojaku.display;
ballena_fantasma.display;
basan.display;
bola_de_fuego.display;
dragon.display;
esfinge.display;
fenix.display;
grifo.display;
hidra.display;
manticora.display;
medusa.display;
ogro.display;
pico_de_nieve.display;
plataforma_flotante.display;
poder_semillas.display;
quilin.display;
quimera.display;
silfide.display;
sirena.display;
tierra_completa.display;
unicornio.display;
zorro_de_muchas_colas.display;
}