import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsListItem extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired
	}

	render() {
		const {item} = this.props;
		return (
			<div>
				<a target="_blank" href={item.url}>{item.title}</a>
				<img src={item.urlToImage}></img>
				<div>{item.description}</div>
			</div>
		);
	}
}

export default NewsListItem;