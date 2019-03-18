import {actionTypes} from '../action/action'
const initState = {
	sourceList: [],
	newsList: [],
	srcShow: true,
	newsShow: false,
	selectedSource: undefined,
}

const appReducer = (prevState =  initState, action) => {
	switch(action.type) {
		case actionTypes.sourceChange:
			return Object.assign({}, prevState, {selectedSource: action.sourceId});
		case actionTypes.sourceFetchEnd:
			return Object.assign({}, prevState, {sourceList: action.sourceList, newsList: [], srcShow: true});
		case actionTypes.newsFetchEnd:
			return Object.assign({}, prevState, {newsList: action.newsList, newsShow: true});
		case actionTypes.sourceFetchStart:
			return Object.assign({}, prevState, {srcShow: false});
		case actionTypes.newsFetchStart:
			return Object.assign({}, prevState, {newsShow: false});
		default:
			return prevState;
	}
}

export default appReducer;