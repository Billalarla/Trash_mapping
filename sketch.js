
const mappa = new Mappa('Leaflet');
let trainmap;
let canvas;


const options = {
	lat: 55.676098,
	lng: 12.568337,
	zoom: 11,
	style:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
canvas = createCanvas(800,600);
trainMap = mappa.tileMap(options);
trainMap.overlay(canvas);
}

function draw() {

}