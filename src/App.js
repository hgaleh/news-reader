import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {selectSource, updateSourceList} from './action/action';
import {SourceList} from './component/source-list';
import {NewsList} from './component/news-list';
import './App.css';

class App extends Component {
	static propTypes = {
		selectedSource: PropTypes.string.isRequired,
		sourceList: PropTypes.array.isRequired,
		showNewsList: PropTypes.bool.isRequired,
		newsList: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired,
	}

	render() {
		const {selectedSource, sourceList, showNewsList, newsList, dispatch} = this.props;
		return (
			<div>
				<SourceList 
					selectedSource={selectedSource} 
					sourceList={sourceList} 
					click={sourceId => dispatch(selectSource(sourceId))}
				></SourceList>
				<button click={dispatch(updateSourceList())}>Refresh</button>
				{showNewsList &&
					<NewsList
						newsList={newsList}>
					</NewsList>
				}
			</div>
		);
	}
}

export default App;
