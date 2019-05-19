import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';
import {sourceChange, sourceFetchStart, newsFetchStart} from './action/action'
import NewsList from './component/news-list';
import './style.css';

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
			<div className="container">
				<div className="news-row">
					<div className="source-list">
						<button className="btn-update" onClick={() => dispatch(sourceFetchStart())}>Update Source List</button>
						{showSourceList &&
							<SourceList 
								selectedSource={selectedSource} 
								sourceList={sourceList} 
								click={sourceId => dispatch(sourceChange(sourceId, state[sourceId]?false:true))}
							></SourceList>
						}
						{!showSourceList &&
							<div className="wrap">
								<div className="spinner-wrap">
									<div className="spinner">
										<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
									</div>
								</div>
							</div>
						}
					</div>
					<div className="news-list">
						<button className="btn-update" onClick={() => dispatch(newsFetchStart(selectedSource))}>Update News List</button>
						{showNewsList &&
							<NewsList newsList={newsList}>
							</NewsList>
						}
						{!showNewsList &&
							<div className="wrap">
								<div className="spinner-wrap">
									<div className="spinner">
										<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
									</div>
								</div>
							</div>
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
