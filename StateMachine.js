class StateMachine {
	constructor() {
		this.currentState = null;
		this.states = states;
	}

	addState(state) {
		var matchingKeys = _.filter(this.states, (state) => {
			return state.key == newstate.key;
		});

		if (matchingKeys.length > 0) {
			console.warn("Already have a state with key " +newstate.key);
		} else {
			this.states.push(newstate);
		}
	}

	switchState(key) {
		var nextState = _.findWhere(this.states, {key});
		if (nextState !== null) {
			if (this.currentState !== null) {
				this.currentState.exit();
			}

			this.currentState = nextState;
			this.currentState.enter();
		} else {
			console.warn("No state with key " + key);
		}
	}
}

export default StateMachine;