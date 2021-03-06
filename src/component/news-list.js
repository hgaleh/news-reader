import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NewsListItem from './news-list-item';

class NewsList extends Component {
	static propTypes = {
		newsList: PropTypes.array.isRequired
	}

	makeList(newsList) {
		return newsList.map(listItem => {
			return (<NewsListItem 
				item={listItem} >
			</NewsListItem>)
		});
	}

	render() {
		const {newsList} = this.props;
		const listItems = this.makeList(newsList)
		return (
			<div>
				{listItems}
			</div>
		);
	}
}

export default NewsList;