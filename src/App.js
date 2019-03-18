import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';

class App extends Component {
	static propTypes = {
		selectedSource: PropTypes.string,
		sourceList: PropTypes.array,
		showNewsList: PropTypes.bool,
		newsList: PropTypes.array,
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
			</div>
		);
	}
}

const mapStateToProps = state => ({
	selectedSource: state.selectedSource,
	sourceList: state.sourceList,
	showNewsList: state.newsShow,
	newsList: state.newsList
});

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);
