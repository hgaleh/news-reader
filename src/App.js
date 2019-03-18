import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';
import {sourceChange} from './action/action'

class App extends Component {
	static propTypes = {
		selectedSource: PropTypes.string,
		sourceList: PropTypes.array.isRequired,
		showNewsList: PropTypes.bool,
		showSourceList: PropTypes.bool,
		newsList: PropTypes.array,
		dispatch: PropTypes.func.isRequired,
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
					<b>...Loading News Sources</b>
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
