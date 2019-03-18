
actions = [
	{type: 'sourceListShow'},
	{type: 'updateSourceList'},
	{type: 'newsListShow'},
	{type: 'updateNewsList'}
];

const initState = {
	sourceList = [],
	newsList = [],
	srcShow = true,
	newsShow = false,
}

export const appReducer = (prevState =  initState, action) => {
	switch(action.type) {
		case 'sourceListShow':
			return Object.assign({}, prevState, {srcShow: true, newsShow: false});
		case 'updateSourceList':
			
		case 'newsListShow':
			return Object.assign({}, prevState, {srcShow: false, newsShow: true});
		case 'updateNewsList':
		default:
			return prevState;
	}
}

sourceList = fetch("/v2/sources?apiKey=99dbfe8e8a99490bb69dff1834b644a0")