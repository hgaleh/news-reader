import {actionTypes} from '../action/action'
const initState = {
	sourceList: [],
	newsList: [],
	srcShow: true,
	newsShow: false,
	selectedSource: undefined
}

const appReducer = (prevState =  initState, action) => {
	switch(action.type) {
		case actionTypes.sourceChange:
			return Object.assign({}, prevState, {selectedSource: action.sourceId});
		case actionTypes.sourceFetchEnd:
			return Object.assign({}, prevState, {sourceList: action.sourceList, newsList: []});
		case actionTypes.newsFetchEnd:
			return Object.assign({}, prevState, {newsList: action.newsList});
		default:
			return prevState;
	}
}

export default appReducer;