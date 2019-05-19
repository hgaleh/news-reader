import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';
import {sourceChange, sourceFetchStart, newsFetchStart} from './action/action'
import NewsList from './component/news-list';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
		if((this.props.selectedSource === undefined) || (this.props.selectedSource === null)) {
			dispatch(sourceFetchStart());
		}
	}

	componentDidUpdate(prevProps) {
	}
	
	render() {
		const {selectedSource, sourceList, showNewsList, newsList, dispatch, showSourceList, state} = this.props;
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-3">
						<button className="btn btn-primary" onClick={() => dispatch(sourceFetchStart())}>Update Source List</button>
						{showSourceList &&
							<SourceList 
								selectedSource={selectedSource} 
								sourceList={sourceList} 
								click={sourceId => dispatch(sourceChange(sourceId, state[sourceId]?false:true))}
							></SourceList>
						}
						{!showSourceList &&
							<b>Loading News Sources...</b>
						}
					</div>
					<div className="col-md-9">
						<button className="btn btn-primary" onClick={() => dispatch(newsFetchStart(selectedSource))}>Update News List</button>
						{showNewsList &&
							<NewsList newsList={newsList}>
							</NewsList>
						}
						{!showNewsList &&
							<b>Loading News...</b>
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state,
	selectedSource: state.selectedSource,
	sourceList: state.sourceList,
	showNewsList: state.newsShow,
	newsList: state.selectedSource? (state[state.selectedSource] || []): [],
	showSourceList: state.srcShow
});

const mapDispatchToProps = dispatch => ({
	dispatch
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);
