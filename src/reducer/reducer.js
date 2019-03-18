import {actionTypes} from '../action/action'
const initState = {
	sourceList: [],
	newsList: [],
	srcShow: true,
	newsShow: false,
}

const appReducer = (prevState =  initState, action) => {
	switch(action.type) {
		case actionTypes.sourceListShow:
			return Object.assign({}, prevState, {srcShow: true, newsShow: false});
		case actionTypes.updateSourceList:
			
		case actionTypes.newsListShow:
			return Object.assign({}, prevState, {srcShow: false, newsShow: true});
		case actionTypes.updateNewsList:
		default:
			return prevState;
	}
}

export default appReducer;