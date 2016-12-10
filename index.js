module.exports = {
	hello: function() {
		console.log("hi!");
	}
}

class TestClass {
	constructor(voice) {
		this.voice = voice;
	}

	Speak() {
		console.log("I am speaking", this.voice);
	}
}

module.exports.TestClass = TestClass;