export const selectSource = () => {
	type: 'selectSource'
} 

export const selectNews = (sourceId) => {
	type: 'selectNews',
	sourceId
}