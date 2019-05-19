import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourceList from './component/source-list';
import { connect } from 'react-redux';
import {sourceChange, sourceFetchStart, newsFetchStart} from './action/action'
import NewsList from './component/news-list';
import './style.css';
import { Spinner } from './component/spinnes';

class App extends Component {
	constructor(props) {
		super(props);
		this.openNav = this.openNav.bind(this);
		this.closeNav = this.closeNav.bind(this);
		this.sourceListClickHandler = this.sourceListClickHandler.bind(this);
		this.state = {
			sadeNavWidth: '0'
		}
	}
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
	
	openNav() {
		this.setState({
			sadeNavWidth: '100%'
		})
	}

	closeNav() {
		this.setState({
			sadeNavWidth: '0'
		})
		this.forceUpdate();
	}

	sourceListClickHandler(sourceId) {
		this.closeNav();
		this.props.dispatch(sourceChange(sourceId, this.props.state[sourceId]?false:true));
	}

	render() {
		const {selectedSource, sourceList, showNewsList, newsList, dispatch, showSourceList} = this.props;
		return (
			<div className="container">
				<div className="news-row">
					<span style={{fontSize: '30px', cursor:'pointer'}} className="side-nav-button" onClick={this.openNav}>News Sources</span>
					<div className="sidenav" style={{width: this.state.sadeNavWidth}}>
						<a className="closebtn" onClick={this.closeNav}>&times;</a>
						<button className="btn-update" onClick={() => dispatch(sourceFetchStart())}>Update Source List</button>
						{showSourceList &&
							<SourceList 
								selectedSource={selectedSource} 
								sourceList={sourceList} 
								click={ this.sourceListClickHandler }
							></SourceList>
						}
						{!showSourceList &&
							<Spinner/>
						}
					</div>
					<div className="news-list">
						<button className="btn-update" onClick={() => dispatch(newsFetchStart(selectedSource))}>Update News List</button>
						{showNewsList &&
							<NewsList newsList={newsList}>
							</NewsList>
						}
						{!showNewsList &&
							<Spinner/>
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
