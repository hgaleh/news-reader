export const saveTo = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch(err) {
		// throw err;
	}
} 

export const loadFrom = () => {
	try {
		const persisted = localStorage.getItem('state');
		if (persisted === null) {
			return undefined;
		}
		return JSON.parse(persisted);
	} catch(err) {
		return undefined;
	}
}