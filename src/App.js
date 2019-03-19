import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';
import {sourceChange, sourceFetchStart} from './action/action'
import NewsList from './component/news-list';

class App extends Component {
	static propTypes = {
		selectedSource: PropTypes.string,
		sourceList: PropTypes.array,
		showNewsList: PropTypes.bool,
		showSourceList: PropTypes.bool,
		newsList: PropTypes.array,
		dispatch: PropTypes.func.isRequired,
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(sourceFetchStart());
	}

	componentDidUpdate(prevProps) {
	}
	
	render() {
		const {selectedSource, sourceList, showNewsList, newsList, dispatch, showSourceList} = this.props;
		return (
			<div>
				{showSourceList &&
					<SourceList 
						selectedSource={selectedSource} 
						sourceList={sourceList} 
						click={sourceId => dispatch(sourceChange(sourceId))}
					></SourceList>
				}
				{!showSourceList &&
					<b>Loading News Sources...</b>
				}

				{showNewsList &&
					<NewsList newsList={newsList}>
					</NewsList>
				}
				{!showNewsList &&
					<b>Loading News...</b>
				}
				
			</div>
		);
	}
}

const mapStateToProps = state => ({
	selectedSource: state.selectedSource,
	sourceList: state.sourceList,
	showNewsList: state.newsShow,
	newsList: state.newsList,
	showSourceList: state.srcShow
});

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);
