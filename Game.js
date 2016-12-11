import _ from 'underscore';

import StateMachine from './StateMachine';
import Canvas from './Canvas';

class Game {
	constructor(parentID, states, fps=30) {
		this.parentID = parentID;
		this.gamePadding = 64;
		this.gameWidth = 1024;
		this.gameHeight = 1024;

		this.fps = fps;
		this.timeScaleFPS = 30;
		this.idealFrameTime = 1000 / this.timeScaleFPS;
		this.delta = 0;

		this.state = new StateMachine(states, this);
		this.canvases = [];
		this.canvasIndex = 0;
		window.onresize = this.resizeCanvases.bind(this);
		document.onmouseover = this.onmousemove.bind(this);
		document.onmousemove = this.onmousemove.bind(this);
		document.onclick = this.onmouseclick.bind(this);
		document.onmousedown = this.onmousedown.bind(this);
		document.onmouseup = this.onmouseup.bind(this);
	}

	start(key) {
		this.state.switchState(key);
		this.paused = false;
		this.lastTimestamp = this.timestamp();
		this.loop();
	}

	timestamp() {
		return performance.now();
	}

	loop() {
		var lastFrameTimeElapsed = this.timestamp() - this.lastTimestamp;
		this.delta = lastFrameTimeElapsed / this.idealFrameTime;
		this.update();
		this.render();
		this.lastTimestamp = this.timestamp();
		if (lastFrameTimeElapsed < this.idealFrameTime) {
			setTimeout(this.loop.bind(this), this.idealFrameTime - lastFrameTimeElapsed);
		} else {
			this.loop();
		}
	}

	update() {
		this.state.update();
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