import _ from 'underscore';

class Game {
	constructor(parentID, states) {
		this.parentID = parentID;
		this.gamePadding = 64;
		this.gameWidth = 1024;
		this.gameHeight = 1024;

		this.states = states;
		this.canvases = [];
		this.canvasIndex = 0;
		window.onresize = this.resizeCanvases.bind(this);
		document.onmouseover = this.onmousemove.bind(this);
		document.onmousemove = this.onmousemove.bind(this);
		document.onclick = this.onmouseclick.bind(this);
		document.onmousedown = this.onmousedown.bind(this);
		document.onmouseup = this.onmouseup.bind(this);
	}

	addState(state) {

	}

	start(key) {

	}

	loop() {

	}

	update() {

	}

	render() {

	}

	createCanvas(key) {
		var canvas = new Canvas(this.parent, this.canvasIndex, 'canvas_' + key, this.gamePadding, this.gameWidth, this.gameHeight);
		this.canvasIndex++;
		this.canvases.push(canvas);
		return canvas;
	}

	resizeCanvases() {
		_.each(this.canvases, function(c) {
			c.resize();
		});
		this.drawBackground();
		this.renderGrid();
		this.redrawStones();
	}

	//Mouse input
	onmousemove() {

	}
	onmousemove() {

	}
	onmouseclick() {

	}
	onmousedown() {

	}
	onmouseup() {

	}
}

export default Game;