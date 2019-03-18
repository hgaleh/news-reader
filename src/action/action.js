export const actionTypes = {
	sourceChange: 'SOURCE_CHANGE',
	sourceFetchStart: 'SOURCE_FETCH_START',
	sourceFetchEnd: 'SOURCE_FETCH_END',
	newsFetchStart: 'NEWS_FETCH_START',
	newsFetchEnd: 'NEWS_FETCH_END'
};

const sourceChangeActionMaker = (sourceId) => ({
	type: actionTypes.sourceChange,
	sourceId
});

export const sourceChange = (sourceId) => dispatch => {
	dispatch(sourceChangeActionMaker(sourceId));
	dispatch(newsFetchStart(sourceId));
}

export const sourceFetchEnd = (sourceList) => ({
	type: actionTypes.sourceFetchEnd,
	sourceList
})

export const newsFetchEnd = (newsList) => ({
	type: actionTypes.newsFetchEnd,
	newsList
})

export const sourceFetchStart = () => dispatch => {
	dispatch({type: actionTypes.sourceFetchStart});
	return fetch("/v2/sources?apiKey=99dbfe8e8a99490bb69dff1834b644a0")
	.then(response => response.json())
	.then(json => dispatch(sourceFetchEnd(json.sources)))
}

export const newsFetchStart = (sourceId) => dispatch => {
	dispatch({type: actionTypes.newsFetchStart});
	fetch(`/v2/top-headlines?sources=${sourceId}&apiKey=99dbfe8e8a99490bb69dff1834b644a0`)
	.then(response => response.json())
	.then(json => dispatch(newsFetchEnd(json.articles)))
}