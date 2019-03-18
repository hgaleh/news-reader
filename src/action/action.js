export const actionTypes = {
	sourceListShow: 'SOURCE_LIST_SHOW',
	updateSourceList: 'UPDATE_SOURCE_LIST',
	newsListShow: 'NEWS_LIST_SHOW',
	updateNewsList: 'UPDATE_NEWS_LIST'
};

export const selectSource = (sourceId) => {
	type: actionTypes.selectSource,
	sourceId
} 

export const updateSourceList = () => {
	type: actionTypes.updateSourceList
}