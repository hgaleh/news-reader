import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
	static propTypes = {
		selectedSubreddit: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired,
		lastUpdated: PropTypes.number,
		dispatch: PropTypes.func.isRequired
	  }
	render() {
		return (

		);
	}
}
