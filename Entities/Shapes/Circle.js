import Entity from '../../Entity';

class Circle extends Entity {
	constructor(
		game, 
		canvas, 
		position, 
		radius=128, 
		fillStyle,
		strokeStyle,
		fillAlpha=1, 
		strokeAlpha=1
	) {
		super(game, canvas, position);
		this.radius = radius;
		this.fillStyle = fillStyle;
		this.strokeStyle = strokeStyle;
		this.fillAlpha = fillAlpha;
		this.strokeAlpha = strokeAlpha;
	}

	render() {
		this.canvas.drawCircle(
			this.position, 
			this.radius, 
			this.fillStyle, 
			this.strokeStyle, 
			this.fillAlpha, 
			this.strokeAlpha
		);
	}
}

export default Circle;