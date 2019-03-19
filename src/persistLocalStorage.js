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
		const json = JSON.parse(persisted);
		if((json.sourceList === undefined) || (json.sourceList === null)) {
			json.srcShow = false;
		}
		if((json.newsList === undefined) || (json.newsList === null)) {
			json.newsShow = false;
		}
		return json; 
	} catch(err) {
		return undefined;
	}
}