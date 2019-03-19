export const actionTypes = {
	sourceChange: 'SOURCE_CHANGE',
	sourceFetchStart: 'SOURCE_FETCH_START',
	sourceFetchEnd: 'SOURCE_FETCH_END',
	newsFetchStart: 'NEWS_FETCH_START',
	newsFetchEnd: 'NEWS_FETCH_END',
	sourceFetchFail: 'SOURCE_FETCH_FAIL'
};

const sourceChangeActionMaker = (sourceId) => ({
	type: actionTypes.sourceChange,
	sourceId
});

export const sourceFetchFail = () => ({
	type: actionTypes.sourceFetchFail
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
	.catch(e => {
		dispatch(sourceFetchFail());
	})
	.then(response => response.json())
	.then(json => {
		if(json.status == 'error') {
			return dispatch(sourceFetchFail());
		}
		return dispatch(sourceFetchEnd(json.sources));
	});
};

export const newsFetchStart = (sourceId) => dispatch => {
	dispatch({type: actionTypes.newsFetchStart});
	return fetch(`/v2/top-headlines?sources=${sourceId}&apiKey=99dbfe8e8a99490bb69dff1834b644a0`)
	.then(response => response.json())
	.then(json => {dispatch(newsFetchEnd(json.articles))});
}

const sourceListResponse = {
	status:"ok",
	sources:[
			 {
		  id:"abc-news",
		  name:"ABC News",
		  description:"Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
		  url:"https://abcnews.go.com",
		  category:"general",
		  language:"en",
		  country:"us"
	   },
		{
			id:"abc-news-au",
			name:"ABC News (AU)",
			description:"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
			url:"http://www.abc.net.au/news",
			category:"general",
			language:"en",
			country:"au"
		}
	]
  }
  

  const newsList = {  
	status:"ok",
	totalResults:10,
	articles:[  
	   {  
		  source:{  
			 id:"bbc-news",
			 name:"BBC News"
		  },
		  author:"BBC News",
		  title:"Beto O'Rourke campaign raises record $6.1m",
		  description:"The Democratic rising star has broken the fundraising record previously held by Senator Bernie Sanders.",
		  url:"http://www.bbc.co.uk/news/world-us-canada-47615526",
		  urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/FE21/production/_106075056_gettyimages-1136074073.jpg",
		  publishedAt:"2019-03-18T15:34:04Z",
		  content:"Image copyrightGetty ImagesImage caption\r\n Mr O'Rourke has been campaigning in Iowa\r\nIn his first day of campaigning as a presidential candidate, Texas Democrat Beto O'Rourke raised $6.1m (£4.6m), the largest of any 2020 candidate so far.\r\nThe rising star's o… [+3380 chars]"
	   },
	   {  
		  source:{  
			 id:"bbc-news",
			 name:"BBC News"
		  },
		  author:"BBC News",
		  title:"Thousands evacuate in deadly US floods",
		  description:"Two people have died while residents in Nebraska and Iowa were forced to flee in historic flooding.",
		  url:"http://www.bbc.co.uk/news/world-us-canada-47613876",
		  urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/28C5/production/_106073401_captu4356re.jpg",
		  publishedAt:"2019-03-18T14:40:30Z",
		  content:"Image copyrightNebraska DOT\r\nThawing snowpack and heavy rains have brought historically high flooding to several Midwestern states and have led to thousands of evacuations.\r\nTwo people have died, including one man who officials say was trying to rescue strang… [+2416 chars]"
	   }
	]
 }